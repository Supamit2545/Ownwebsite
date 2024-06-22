import React from 'react'
import { useState } from 'react';
import profile from '../assets/img/profile.jpg'
import {
    FaReact,
    FaNodeJs,
    FaYoutube,
    FaGithub,
    FaFacebook,
    FaChevronCircleRight,
    FaPython,
    FaDownload,
    FaToggleOff,
    FaToggleOn,
} from "react-icons/fa";
import './profile.css'

const Profile = () => {
    function profileactive(err) {
        if (err) {
            console.log(err)
        } else {
            const element = document.getElementById("Profilebtn");  // Get the DIV element.
            const aboutmeclass = document.getElementsByClassName("toggleaboutme");
            const aboutme = document.getElementById('aboutme');
            const img = document.getElementById("profileimg");
            const profileLeft = document.getElementById('profile-left')

            if (element.classList.contains('active')) {
                element.classList.remove('active');
                img.classList.remove('active');
                profileLeft.classList.remove('hidden')

                void element.offsetWidth;
                void img.offsetWidth;

                element.classList.add('closed');
                img.classList.add('closed');
                aboutme.textContent = "Open Profile!";
                profileLeft.classList.add('active')
            } else {
                element.classList.remove('closed');
                img.classList.remove('closed');
                profileLeft.classList.remove('active');

                void element.offsetWidth;
                void img.offsetWidth;

                img.classList.add('active');
                element.classList.add('active');
                aboutme.textContent = "Closed Profile!";
                profileLeft.classList.add('hidden')
            }
            console.log("No Error")
        }
    }

    const [aboutme, setAboutme] = useState(false)
    const [abouttoggle, setAbouttoggle] = useState(false)

    const toggleAboutme = () => {
        setAbouttoggle(!abouttoggle)
    }
    console.log(abouttoggle)
    return (
        <div className='img '>
            <div id='profile-left' className='profile-left active'>
                <div className=''>Hello There!</div>
                <div className='text-4xl text-green-500'>I'm Website Developers</div>
                <div className='text-2xl text-blue-500'>Front-End , Full-Stack</div>
                <div className='flex gap-10 mt-5'>
                    <div className='ReactIcon text-blue-500'><FaReact /></div>
                    <div className='text-green-500'><FaNodeJs /></div>
                    <div className='text-blue-500'><FaPython /></div>
                </div>
                <div>
                    <div className='text-2xl mt-5 text-sky-500'>Social</div>
                    <div className='flex gap-5'>
                        <a href="https://www.youtube.com/channel/UCA8_mwwQQZJ0DLaMmUgewgQ"><button className='text-red-500 hover:text-red-700'><FaYoutube /></button></a>
                        <a href="https://github.com/Supamit2545"><button className='bg-white text-gray-900 rounded-full h-20 mt-5'><FaGithub /></button></a>
                        <a href="https://www.facebook.com/profile.php?id=100018763508340"><button className='h-20 mt-5 text-blue-500 hover:text-blue-700 bg-white rounded-full'><FaFacebook /></button></a>
                    </div>
                </div>
            </div>
            <div className='border-profile'></div>
            <div className='profile-mid space-y-10'>
                <img id='profileimg' className='imgprofile' src={profile} alt="" />
                <div className='flex'>
                    <div><button id='Profilebtn' className='toggleaboutme' onClick={(e) => { profileactive(), toggleAboutme() }}><span id='aboutme'>Open Profile!</span></button></div>
                </div>
            </div>
            <div>
                <div className='text-4xl mb-5 underline font-bold'>SKILLS</div>
                <div className='skills-list'>
                    <button className='skills-text'>Html<FaChevronCircleRight /></button>
                    <button className='skills-text'>Css<FaChevronCircleRight /></button>
                    <button className='skills-text'>Javascript<FaChevronCircleRight /></button>
                    <button className='skills-text'>Tailwind<FaChevronCircleRight /></button>
                    <button className='skills-text'>PHP<FaChevronCircleRight /></button>
                    <button className='skills-text'>Python<FaChevronCircleRight /></button>
                    <button className='skills-text'>CV<FaDownload className='text-green-500' /></button>
                    <button className='skills-text'>Resume<FaDownload className='text-green-500' /></button>
                </div>
            </div>
            {abouttoggle && (
                <div id='modal' className="modal active">
                    <div className="modal-layers">
                        <div className="modal-content">
                            <h2 className='text-4xl my-5 font-bold'>My Name is : Supamit Phappusa</h2>
                            <div className='flex justify-between text-2xl'>
                                <div>
                                    <h3>THAI</h3>
                                    <p></p>
                                </div>
                                <div>
                                    <h4>ENG</h4>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile