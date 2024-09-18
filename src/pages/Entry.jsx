import React from 'react'
import Navbar from '../components/Navbar'
import hero from './../assets/hero-bg.jpg'
import Hero from '../components/Hero'

export const Entry = () => {
    return (
        <>
            <div className='bg-cover bg-center h-screen font-sans' style={{ backgroundImage: `url(${hero})` }}>
                <div className='w-full h-full backdrop-brightness-[30%]'>
                    <Navbar />
                    <Hero />
                </div>
            </div>
        </>
    )
}
export default Entry
