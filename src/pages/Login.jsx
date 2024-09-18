import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import hero from './../assets/hero-bg.jpg'
import { checkValidate } from '../utils/validator'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [errMessage, setErrMessage] = useState()
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const loginForm = () => {
        const message = checkValidate(name.current?.value, email.current.value, password.current.value)
        setErrMessage(message)
        if (message) return;
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // console.log(user)
                    // alert(name.current?.value + " Your Account is created.")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Errors:" + errorCode, errorMessage)
                    setErrMessage(errorMessage)
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // alert("Your Account is Signed In.")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Errors:" + errorCode, errorMessage)
                    setErrMessage(errorMessage)
                });

        }
    }

    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browse") 
            } else {
                dispatch(removeUser());
                navigate("/login")
            }
        })
    }, [])

    return (
        <>
            <div className='bg-cover bg-center h-screen font-sans' style={{ backgroundImage: `url(${hero})` }}>
                <div className='w-full h-full lg:backdrop-brightness-[40%] lg:bg-transparent bg-black'>
                    <Navbar />
                    <div className='items-center flex flex-col md:justify-center md:mt-0 mt-8 h-[90%]'>
                        <div className='bg-[rgba(0,0,0,0.7)] md:w-[30%] w-full flex justify-center rounded backdrop-brightness-[30%]'>
                            <form onSubmit={(e) => (e.preventDefault())} action="" className='md:my-10 my-0 md:w-4/6 w-full mx-4 flex flex-col'>
                                <h3 className='text-white text-3xl md:text-2xl font-bold'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h3>
                                {!isSignInForm &&
                                    <input ref={name}
                                        className='bg-[rgba(22,22,22,0.7)] py-3 px-3 md:px-2 md:py-2rounded border border-zinc-500 text-white md:mt-5 mt-8' autoComplete='name'
                                        type="text"
                                        placeholder='Enter your full name'
                                        name=""
                                        id="" />}
                                <input ref={email}
                                    className={`bg-[rgba(22,22,22,0.7)] px-3 py-3 md:px-2 md:py-2 rounded border border-zinc-500 text-white md:mt-3 ${!isSignInForm ? 'mt-3' : 'mt-8'} `} autoComplete='email'
                                    type="text"
                                    placeholder='Email or mobile number'
                                    name="email"
                                    id="" />
                                <input
                                    ref={password}
                                    className='bg-[rgba(22,22,22,0.7)] py-3 px-3 md:px-2 md:py-2 rounded border border-zinc-500 text-white mt-3'
                                    autoComplete='current-password'
                                    type="password"
                                    placeholder='Password' />
                                <span
                                    className='text-white mt-2 text-xs text-red-500 font-semibold'>{errMessage}</span>
                                <button
                                    onClick={loginForm}
                                    className='bg-[#E50914] text-white px-4 text-md rounded font-semibold h-[35px] py-1 mt-2'>
                                    {isSignInForm ? 'Sign in' : 'Sign up'}</button>
                                <button className='text-left text-zinc-300 text-sm mt-3 cursor-pointer'>
                                    <b className='text-white ps-1' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix?  Sign Up now' : 'Already have an account? Sign up now'}</b>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
