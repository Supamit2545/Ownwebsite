import React from 'react'
import "../assets/Style/services.css"
import demo from "../assets/img/demo.jpg"

function Services() {
  return (
    <div>
        <h5 className='text-4xl text-white font-bold text-center'>My Services</h5>
        <div className="service-container">
            <div className="service-content">
                <div className="service-card">
                  <img src={demo} alt="" />
                  <p className='text-2xl text-black underline'>Website Services</p>
                  <p className=''>Design to Code</p>
                  <hr />
                  <div className='flex justify-between'>
                    <p className=''>Front-End</p>
                  </div>
                  <hr />
                  <div className='flex justify-between'>
                    <p className=''>Back-End</p>
                  </div>
                  <hr />
                  <p className=''>Fix work within 30 days for free</p>
                  <button className='text-white text-2xl bg-orange-500 border-2 border-black rounded-xl px-20 mt-5 hover:bg-orange-700'>จ้างงาน</button>
                </div>
                <div className="service-card">
                  <img src={demo} alt="" />
                  <p className='text-2xl text-black underline'>Editor Services</p>
                  <p className=''>Photoshop</p>
                  <hr />
                  <p className=''>Adobe-PremirePro</p>
                  <hr />
                  <p className=''>Fix work within 30 days for free</p>
                  <hr />
                  <p className=''>-</p>
                  <button className='text-white text-2xl bg-orange-500 border-2 border-black rounded-xl px-20 mt-5 hover:bg-orange-700'>จ้างงาน</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services