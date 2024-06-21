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
    
    const [aboutme , setAboutme] = useState(false)
    const [abouttoggle , setAbouttoggle] = useState()

    const toggleAboutme = () =>{
        setAbouttoggle(!abouttoggle)
    }
    console.log(aboutme)
  return (
    <div className='img '>
        <div className='profile-left'>
            <div className=''>Hello There!</div>
            <div className='text-4xl text-green-500'>I'm Website Developers</div>
            <div className='text-2xl text-blue-500'>Front-End , Full-Stack</div>
            <div className='flex gap-10 mt-5'>
                <div className='ReactIcon text-blue-500'><FaReact /></div>
                <div className='text-green-500'><FaNodeJs/></div>
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
            <img className='imgprofile' src={profile} alt=""/>
            <div className='flex'>
                <div><button className='toggleaboutme skills-text px-5 bg-blue-500 font-bold hover:bg-blue-700 hover:px-5 ml-12 ' onClick={toggleAboutme}>Open About Me!</button></div>  
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
                <button className='skills-text'>Resume<FaDownload  className='text-green-500' /></button>
            </div>
        </div>
    </div>
  ) 
}

export default Profile