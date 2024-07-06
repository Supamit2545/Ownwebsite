import './App.css'
import Certificate from './Components/Certificate'
import Context from './Components/Context'
import Profile from './Components/Profile'
import Services from './Components/Services'
import Topbar from './Components/Topbar'
import Projects from './Components/projects'
import ParticleBackground from './Components/particles/ParticleBackground'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'

function App() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []);
  return (
    <div id='app'>
      <div className='sticky'>
        <Topbar/>
      </div>
      <div className='' data-aos="fade-right">
        <Profile/>
      </div>
      <div className='' data-aos="fade-right">
        <Projects/>
      </div>
      <div className='' data-aos="fade-right">
        <Certificate/>
      </div>
      <div className='' data-aos="fade-left">
        <Services/>
      </div>
      <div className='' data-aos="fade-left">
        <Context/>
      </div>
      <ParticleBackground/>
    </div>
  )
}

export default App
