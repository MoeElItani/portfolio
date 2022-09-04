// Styles
import './App.scss'
// Components
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Education from './Components/Education/Education'

function App() {
   return (
      <div className='App'>
         <Navbar />
         <Intro />
         <Education />
      </div>
   )
}

export default App