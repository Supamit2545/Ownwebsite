import React, { useState,useRef } from 'react'
import '../assets/Style/Context.css'
import rcdemo from '../assets/img/rcdemo.jpg'
import emailjs from '@emailjs/browser';
import { Alert } from 'bootstrap';

function Context() {

    const [active ,setActive] = useState()
    
    const activehandle = (id) =>{
        setActive(id)
    }
    
    const form = useRef();

    const sendEmail = (e) => {
      emailjs
      .sendForm(
        'service_akq8gr9',
        'template_t1s9m11',
        form.current, {
        publicKey: 'FQ72-xWBbMPyHJRPp',
      })
      .then(
        () => {
          alert('Send Email SUCCESS!');
          window.location.reload()
        },
        (error) => {
            alert('FAILED...', error.text,"Please Try Again Later");
        },
      );
  };
  return (
    <div className="context">
        <div className="context-content">
            <div className="form">
                <h1 className='text-4xl font-bold text-center my-3'>Contect Me</h1>
                <div className='All-contect flex'>
                    <div className="left-context">
                        <form ref={form} onSubmit={sendEmail} className="input-form">
                            <div className="name-inp">
                                <input className='input-box' type="text" name="user_name" id="" required/>
                                <div className='input-text'>Enter Your Name</div>
                            </div>
                            <div className="name-inp">
                                <input className='input-box' type="text" name="user_email" id="" required/>
                                <div className='input-text'>Enter Suject</div>
                            </div>
                            <div className="name-inp">
                                <textarea className='input-box h-40 text-white' type="text" name="message" id="" required/>
                                <div className='input-text text-orange-500'>Enter Message</div>
                            </div>
                        </form>
                    </div>
                    <div className="right-context">
                        <div className=''>
                            <img src={rcdemo} alt="" className="right-contxt-img" />
                        </div>
                        <div className='mx-auto w-40 font-bold'>
                            <button className='send-btn' onClick={sendEmail}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Context