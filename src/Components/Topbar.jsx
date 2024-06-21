import React from 'react'

function Topbar() {
  return (
    <div className='flex justify-between border-2 bg-gray-900 rounded-2xl px-20 py-3'>
        <div>
            <p className='text-white text-2xl font-bold py-2'>Supamit Phappusa</p>
        </div>
        <div>
            <ul className='flex text-white gap-5 py-2 font-bold '>
                <button className='hover:text-gray-500'>Profile</button>
                <button className='hover:text-gray-500'>Projects</button>
                <button className='hover:text-gray-500'>Certifications</button>
                <button className='border-2 border-black  rounded-3xl px-2 bg-purple-500 py-1 hover:text-green-500'>Dark Mode</button>
            </ul>
        </div>
    </div>
  )
}

export default Topbar