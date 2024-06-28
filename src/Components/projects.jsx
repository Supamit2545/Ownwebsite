import React, { useState } from 'react'
import '../assets/Style/project.css'
import demo from "../assets/img/demo.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const testdata =
        [
            {
                img: demo,
                name: "test1",
                detailtest: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, natus officia. Nam, ipsa at velit, molestiae ducimus dolores itaque repellat voluptatum adipisci eos quod laudantium iure commodi, officiis maxime nobis."
            },
            {
                img: demo,
                name: "test2",
                detailtest: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, natus officia. Nam, ipsa at velit, molestiae ducimus dolores itaque repellat voluptatum adipisci eos quod laudantium iure commodi, officiis maxime nobis."
            },
            {
                img: demo,
                name: "test3",
                detailtest: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, natus officia. Nam, ipsa at velit, molestiae ducimus dolores itaque repellat voluptatum adipisci eos quod laudantium iure commodi, officiis maxime nobis."
            },
            {
                img: demo,
                name: "test4",
                detailtest: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, natus officia. Nam, ipsa at velit, molestiae ducimus dolores itaque repellat voluptatum adipisci eos quod laudantium iure commodi, officiis maxime nobis."
            },
            {
                img: demo,
                name: "test5",
                detailtest: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, natus officia. Nam, ipsa at velit, molestiae ducimus dolores itaque repellat voluptatum adipisci eos quod laudantium iure commodi, officiis maxime nobis."
            },
            {
                img: demo,
                name: "test6",
                detailtest: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, natus officia. Nam, ipsa at velit, molestiae ducimus dolores itaque repellat voluptatum adipisci eos quod laudantium iure commodi, officiis maxime nobis."
            },
        ]

    return (
        <div className='project-container'>
            <p className='text-5xl text-white font-bold py-5 underline'>About My Projects.</p>
            <div className='projects-content'>
                <div className="projects-box">
                    <h1 className='text-4xl text-white font-bold '>Front-End Projects</h1>
                    <Slider {...settings}>
                        {testdata.map((val) => (
                            <div className='projects-card'>
                                <img className='projects-img' src={val.img} alt="" />
                                <div className='card-info'>
                                    <h1 className='hproject ml-10 font-bold text-4xl '>{val.name}</h1>
                                    <p className='pproject'>{val.detailtest}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div>
                        <h2 className='text-4xl text-white font-bold '>Back-End Projects</h2>
                        <Slider {...settings}>
                            {testdata.map((val) => (
                                <div className='projects-card'>
                                    <img className='projects-img' src={val.img} alt="" />
                                    <div className='card-info'>
                                        <h1 className='hproject ml-10 font-bold text-4xl '>{val.name}</h1>
                                        <p className='pproject'>{val.detailtest}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div>
                    <h2 className='text-4xl text-white font-bold '>Full-Stack Projects</h2>
                    <Slider {...settings}>
                        {testdata.map((val) => (
                            <div className='projects-card'>
                                <img className='projects-img' src={val.img} alt="" />
                                <div className='card-info'>
                                    <h1 className='hproject ml-10 font-bold text-4xl '>{val.name}</h1>
                                    <p className='pproject'>{val.detailtest}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div>
                <h3 className='text-white text-2xl'>Partners</h3>
                <div className="partner-content">
                    <img src="" alt="" />
                    <p className='text-5xl text-white my-5'>Notting Yes That is Notting :C</p>
                </div>
            </div>
        </div>
    )
}

export default Projects