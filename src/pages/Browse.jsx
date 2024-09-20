import React, { useEffect } from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

export const Entry = () => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/login')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className='flex jusitfy-center pt-5 h-[10%]'>
      <div className=' w-9/12 flex justify-between items-center mx-auto'>
        <Link to='/'>
          <img src={logo} alt="logo" className='lg:h-[50px] h-[32px]' />
        </Link>
        <button onClick={handleSignOut} className='bg-[#E50914] text-white px-4 text-md rounded font-semibold h-[35px] py-1'>
          Log Out
        </button>
      </div>
    </div>)
}
export default Entry
