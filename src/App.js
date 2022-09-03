// Styles
import './App.scss'
// Components
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Technologies from './Components/Technologies/Technologies'

function App() {
   return (
      <div className='App'>
         <Navbar />
         <Intro />
         <Technologies />
      </div>
   )
}

export default App
