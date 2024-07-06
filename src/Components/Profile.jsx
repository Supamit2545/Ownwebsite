import React from 'react'
import { useState } from 'react';
import profile from '../assets/img/front-end/profile.jpg'
import {
    FaReact,
    FaNodeJs,
    FaYoutube,
    FaGithub,
    FaFacebook,
    FaChevronCircleRight,
    FaChevronCircleDown,
    FaPython,
    FaDownload,
    FaToggleOff,
    FaToggleOn,
} from "react-icons/fa";
// import รูปภาพ
import cssp from "../assets/img/front-end/CSS.png"
import htmL from "../assets/img/front-end/HTML.png"
import javas from "../assets/img/front-end/javascript.png"
import reactt from "../assets/img/front-end/REACT.png"
import nextjss from "../assets/img/front-end/nextjs.png"
import tailwind from "../assets/img/front-end/tailwind.png"
import native from "../assets/img/front-end/download.png"
// backend
import mongo from '../assets/img/back-end/mongodb.png'
import python from '../assets/img/back-end/Python.png'
import mysql from '../assets/img/back-end/mysql.png'
import node from '../assets/img/back-end/node.png'
// tools
import git from '../assets/img/tools/git.png'
import github from '../assets/img/tools/github.png'
import postman from '../assets/img/tools/postman.png'
import vscode from '../assets/img/tools/vscode.png'
import '../assets/Style/profile.css'
import Typed from 'typed.js';

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
                aboutme.textContent = "Close Profile!";
                profileLeft.classList.add('hidden')
            }
            console.log("No Error")
        }
    }
    function activeSkils() {
        const hidtab = document.querySelectorAll('.skills-text')

        if (hidtab.classList.contains('active')) {
            tab.classList.add('active');
            tab.classList.remove('hidden');
        } else {
            tab.classList.remove('active');
            tab.classList.add('hidden');
        }

    }

    const [aboutme, setAboutme] = useState(false)
    const [abouttoggle, setAbouttoggle] = useState(false)
    const [activeTab, setActive] = useState(0)
    const [icon, setIcon] = useState()

    const handleActive = (id) => {
        setActive(id)
    }

    const toggleAboutme = () => {
        setAbouttoggle(!abouttoggle)
    }

    const iconChange = () => {
        if (activeTab === 'active') {
            <FaChevronCircleDown />
        } else {
            <FaChevronCircleRight />
        }
    }

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ['Website Developer', 'Editor','Freelancer','Youtuber'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

    return (
        <div className='profile-containter'>
            <div id='profile-left' className='profile-left active'>
                <div className='text-left'>
                    <div className='text'>
                        <div className=''>Hi There!</div>
                        <div className='flex text-2xl'>
                            <p className='mr-5 pb-5 text-2xl'>I'm : </p><span className=' text-2xl text-green-500' ref={el}></span>
                        </div>
                        <div className='text-2xl text-blue-500'>Front-End , Full-Stack</div>
                        <div className='flex gap-10 mt-5'>
                            <div className='ReactIcon text-blue-500'><FaReact /></div>
                            <div className='text-green-500'><FaNodeJs /></div>
                            <div className='text-blue-500'><FaPython /></div>
                        </div>
                    </div>
                    <div className='social'>
                        <div className='text-2xl mt-5 text-sky-500'>Social</div>
                        <div className='flex gap-5'>
                            <a href="https://www.youtube.com/channel/UCA8_mwwQQZJ0DLaMmUgewgQ"><button className='text-red-500 hover:text-red-700 mt-5'><FaYoutube /></button></a>
                            <a href="https://github.com/Supamit2545"><button className='bg-white text-gray-900 rounded-full h-20 mt-5'><FaGithub /></button></a>
                            <a href="https://www.facebook.com/profile.php?id=100018763508340"><button className='h-20 mt-5 text-blue-500 hover:text-blue-700 bg-white rounded-full'><FaFacebook /></button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-profile'></div>
            <div className='profile-mid space-y-5'>
                <img id='profileimg' className='imgprofile' src={profile} alt="" />
                <div className='pbtn'>
                    <div className=''><button id='Profilebtn' className='toggleaboutme' onClick={(e) => { profileactive(), toggleAboutme() }}><span id='aboutme'>Open Profile!</span></button></div>
                </div>
            </div>
            <div>
                <div className='text-4xl mb-5 underline font-bold'>SKILLS</div>
                <div className='skills-list'>
                    <button id='tabs' className={`skills-text px-5 ${activeTab === 0 ? "active" : ""}`} onClick={() => { handleActive(0) }}>Front-End {activeTab === 0 ? <FaChevronCircleDown /> : <FaChevronCircleRight />} </button>
                    <button id='tabs' className={`skills-text ${activeTab === 1 ? "active" : ""}`} onClick={() => { handleActive(1) }}>Back-End {activeTab === 1 ? <FaChevronCircleDown /> : <FaChevronCircleRight />} </button>
                    <button id='tabs' className={`skills-text ${activeTab === 2 ? "active" : ""}`} onClick={() => { handleActive(2) }}>Tools {activeTab === 2 ? <FaChevronCircleDown /> : <FaChevronCircleRight />} </button>
                    {/* <button className='skills-text' onClick={RemoveHidden}>Reset<FaDownload className='text-green-500' /></button> */}
                </div>
                <div className="content-box">
                    <div className={`content ${activeTab === 0 ? "active" : ""}`}>
                        <ul className='Cbox'>
                            <div className='content-text'>
                                <img className='mx-auto py-2' src={htmL} alt="" width={50} />
                                <li className='content-text'>HTML</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-2' src={cssp} alt="" width={30} height={20} />
                                <li className='content-text'>CSS</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-2' src={javas} alt="" width={50} />
                                <li className='content-text'>JAVASCRIPT</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-2' src={reactt} alt="" width={50} />
                                <li className='content-text'>REACT</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-2 mt-2' src={native} alt="" width={50} />
                                <li className='content-text'>REACT-NATIVE</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-2' src={nextjss} alt="" width={50} />
                                <li className='content-text'>NextJS</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-2' src={tailwind} alt="" width={50} />
                                <li className='content-text'>Tailwind</li>
                            </div>
                        </ul>
                    </div>
                    <div className={`content ${activeTab === 1 ? "active" : ""}`}>
                        <ul className='Cbox'>
                            <div className='content-text'>
                                <img className='mx-auto py-5' src={node} alt="" width={50} />
                                <li className='content-text'>NodeJS</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-5 mt-3' src={python} alt="" width={30} height={20} />
                                <li className='content-text'>Python</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-5' src={mongo} alt="" width={50} />
                                <li className='content-text'>Mongodb</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-5' src={mysql} alt="" width={50} />
                                <li className='content-text'>mysql</li>
                            </div>
                        </ul>
                    </div>
                    <div className={`content ${activeTab === 2 ? "active" : ""}`}>
                        <ul className='Cbox'>
                            <div className='content-text'>
                                <img className='mx-auto py-1' src={vscode} alt="" width={50} />
                                <li className='content-text'>Vscode</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-1 mt-3' src={postman} alt="" width={30} height={20} />
                                <li className='content-text'>Postman</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-1' src={github} alt="" width={50} />
                                <li className='content-text'>Github</li>
                            </div>
                            <div className='content-text'>
                                <img className='mx-auto py-1' src={git} alt="" width={50} />
                                <li className='content-text'>Git</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='download-btn flex w-2/5 mx-auto my-5 gap-10'>
                    <button className='skills-text px-3' >Resume<FaDownload className='text-green-500' /></button>
                    <button className='skills-text px-10' >CV<FaDownload className='text-green-500' /></button>
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
                                    <p className='w-6/7 pr-10 ml-5  border-r-2 border-black'>
                                        ผมกำลังสนใจด้านเว็บไซต์ที่สวยงามและใช้งานง่ายเริ่มต้นศึกษาตั้งเกี่ยวกับโปรแกรมตั้งแต่เข้าปวช.
                                        และเข้าเรียนมหาลัยในสาขา Computer Engineer แต่ไม่จบ เรียนได้ถึงปี 2 ครับ ภาษาที่ชอบที่สุดคือ Python ครับ
                                    </p>
                                </div>
                                <div className='text-end'>
                                    <h4>ENG</h4>
                                    <p className='w-4/4 ml-auto'>
                                        I am interested in websites that are beautiful and easy to use. I started studying about the program since entering my vocational certificate.
                                        And went to university in the field of Computer Engineer, but didn't graduate. I studied until year 2. My favorite language is Python.
                                    </p>
                                </div>
                            </div>
                            <div className='my-4'>
                                <div className='text-3xl font-bold '>Other Skills.</div>
                            </div>
                            <div className='other-skills flex justify-between'>
                                <div className='oskills text-xl'>
                                    <p>Flexibility and Adaptability</p>
                                    <p>|⭐|⭐|⭐|⭐|⭐|</p>
                                </div>
                                <div className='oskills text-xl'>
                                    <p>Creativity</p>
                                    <p>|⭐|⭐|⭐|⭐|</p>
                                </div>
                                <div className='oskills text-xl'>
                                    <p>Positive Attitude</p>
                                    <p>|⭐|⭐|⭐|⭐|⭐|</p>
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