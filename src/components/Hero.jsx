import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className='items-center flex flex-col justify-center h-[90%]'>
            <div className='text-center w-[85%] md:w-[38%]'>
                <h1 className="text-white text-center text-3xl md:text-5xl md:font-extrabold font-bold">Unlimited movies,
                    <br />TV shows and more</h1>
                <p className='text-white md:mt-5 md:text-lg mt-1 font-semibold text-sm'>Starts at ₹149. Cancel anytime.</p>
                <div>
                    <p className='text-white font-semibold md:mt-4 mt-2 leading-5 md:text-sm text-md'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='flex flex-col md:flex-row items-center md:gap-2 gap-4 mt-3'>
                        <input type="text" className='bg-zinc-800 text-zinc-100 px-4 md:py-3 py-2 border border-zinc-500 rounded md:w-8/12 w-full' placeholder='Email Address' />
                        <button className='bg-[#E50914] text-white px-4 md:py-3 py-2 text-xl font-bold rounded md:w-5/12 w-4/6'>Get Started <i class="ri-arrow-right-s-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero