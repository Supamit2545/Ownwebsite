import React from 'react'
import { useState } from 'react';
import '../assets/Style/topber.css'

function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // !false = true
  }
  return (
    <div>
      <nav className='topbar flex justify-between rounded-3xl px-20 py-3'>
        <div>
          <p className='text-white text-2xl font-bold py-2'>Supamit Phappusa</p>
        </div>
        <div className='md:hidden text-white'>
          <button id='menu-toggle' className='py-3 mr-5' onClick={toggleMenu}>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap="round"
              strokeLinejoin='round'
              strokeWidth="3"
              viewBox='0 0 24 24'
              className='w-6 h-6'
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className='hidden md:flex space-x-10 my-2 py-2 list-none px-5' >
          <ul className='flex text-white gap-5 py-2 font-bold '>
            <button className='hover:text-gray-500'>Profile</button>
            <button className='hover:text-gray-500'>Projects</button>
            <button className='hover:text-gray-500'>Certifications</button>
            <button className='hover:text-gray-500'>Services</button>
            <button className='hover:text-gray-500'>Contact</button>
            {/* <button className='border-2 border-black  rounded-3xl px-2 bg-purple-500 py-1 hover:text-green-500'>Dark Mode</button> */}
          </ul>
        </div>
      </nav>
        <div className='md:hidden w-2/3 text-center gap-5 mx-auto'>
          <div>
            {isMenuOpen ? (
              <ul className='flex bg-blue-500 flex-col w-auto space-y-10 md:hidden rounded-3xl'>
                <button className='hover:text-white font-bold'>Profile</button>
                <button className='hover:text-white font-bold'>Projects</button>
                <button className='hover:text-white font-bold'>Certifications</button>
                <button className='hover:text-white font-bold'>Services</button>
                <button className='hover:text-white font-bold'>Contact</button>
                {/* <button className='border-2 border-black  rounded-3xl px-2 bg-purple-500 py-1 hover:text-green-500'>Dark Mode</button> */}
              </ul>
            ) : null}
          </div>
        </div>
    </div>
  )
}

export default Topbar