import './App.css'
import Profile from './Components/Profile'
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
    </>
  )
}

export default App
