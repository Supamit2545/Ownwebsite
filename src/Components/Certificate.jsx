import React from 'react'
import '../assets/Style/certi.css'
import democer from "../assets/img/certificate/certificate.png"

function Certificate() {
  return (
    <div>
        <div className="cer-container">
            <h4 className='text-center text-5xl font-bold text-white'>Certification</h4>
            <div className='cer-box'>
                <div className="cer-con">
                    <div className="certi">
                        <div className="backspin"></div>
                        <img className='cer-img' src={democer} alt="" />
                        <p className='text-white font-bold text-center relative w-50 mx-auto'>Borntodev Certificate</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate