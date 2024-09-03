import React from 'react'
import logo from './../assets/logo.jpg'

const Navbar = () => {
    return (
        <div className='bg-zinc-900 flex jusitfy-center py-3 flex items-center justify-between px-10'>
            <img src={logo} alt="logo" className='h-[40px]' />
            <button className='bg-[#E50914] text-white px-4 rounded font-semibold h-[35px] py-1'>Sign In</button>
        </div>)
}

export default Navbar