import './App.css'
import Certificate from './Components/Certificate'
import Profile from './Components/Profile'
import Services from './Components/Services'
import Topbar from './Components/Topbar'
import Projects from './Components/projects'

function App() {
  
  return (
    <>
      <div>
        <Topbar/>
      </div>
      <div>
        <Profile/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Certificate/>
      </div>
      <div>
        <Services/>
      </div>
    </>
  )
}

export default App
