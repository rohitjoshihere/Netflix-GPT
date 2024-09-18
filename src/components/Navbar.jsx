import React from 'react'
import logo from './../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const location = useLocation();

    const hideText = location.pathname === '/login' ;

    return (
        <div className='flex jusitfy-center pt-5 h-[10%]'>
            <div className=' w-9/12 flex justify-between items-center mx-auto'>
                <Link to='/'>
                    <img src={logo} alt="logo" className='lg:h-[50px] h-[32px]' />
                </Link>
                {!hideText &&
                    <Link to='/login'>
                        <button className='bg-[#E50914] text-white px-4 text-md rounded font-semibold h-[35px] py-1'>
                            Sign In
                        </button>
                    </Link>
                }
            </div>
        </div>)
}

export default Navbar