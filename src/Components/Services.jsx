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
                  <p className='text-2xl text-black underline'>Website Developer</p>
                  <p className=''>Design to Code</p>
                  <hr />
                  <p className=''>Front-End</p>
                  <hr />
                  <p className=''>Back-End</p>
                  <hr />
                  <p className=''>Fix work within 7 days for free</p>
                  <button className='text-white text-2xl bg-orange-500 border-2 border-black rounded-xl px-20 mt-3 hover:bg-orange-700'>Buy Now</button>
                </div>
                <div className="service-card">
                  <img src={demo} alt="" />
                  <p className='text-2xl text-black underline'>Video Editor</p>
                  <p className=''>Design to Code</p>
                  <hr />
                  <p className=''>Front-End</p>
                  <hr />
                  <p className=''>Back-End</p>
                  <hr />
                  <p className=''>Fix work within 7 days for free</p>
                  <hr />
                  <p className=''>Working Time : 10:00 - 00:00</p>
                  <button className='text-white text-2xl bg-orange-500 border-2 border-black rounded-xl px-20 mt-3 hover:bg-orange-700'>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services