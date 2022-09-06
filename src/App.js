// Styles
import './App.scss'
// Components
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Education from './Components/Education/Education'
import Technologies from './Components/Technologies/Technologies'

function App() {
   return (
      <div className='App'>
         <Navbar />
         <Intro />
         <Education />
         <Technologies />
      </div>
   )
}

export default App
