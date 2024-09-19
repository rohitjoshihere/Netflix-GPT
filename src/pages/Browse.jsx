import React, { useEffect } from 'react'
import logo from './../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { api_option } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

export const Entry = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_option)
    const json = await data.json();
    console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, [])
  const navigate = useNavigate()
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
