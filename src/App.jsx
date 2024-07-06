import { document } from 'postcss'
import './App.css'
import Certificate from './Components/Certificate'
import Context from './Components/Context'
import Profile from './Components/Profile'
import Services from './Components/Services'
import Topbar from './Components/Topbar'
import Projects from './Components/projects'
import ParticleBackground from './Components/particles/ParticleBackground'

function App() {
  return (
    <div id='app'>
      <ParticleBackground/>
      <div className='tb'>
        <Topbar/>
      </div>
      <div className='pf'>
        <Profile/>
      </div>
      <div className='pj'>
        <Projects/>
      </div>
      <div className='cc'>
        <Certificate/>
      </div>
      <div className='sv'>
        <Services/>
      </div>
      <div className='ct'>
        <Context/>
      </div>
    </div>
  )
}

export default App
