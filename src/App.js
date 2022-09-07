// Styles
import './App.scss'
// Components
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Education from './Components/Education/Education'
import Technologies from './Components/Technologies/Technologies'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
   return (
      <div className='App'>
         <Navbar />
         <Intro />
         <Education />
         <Technologies />
         <Contact />
         <Footer />
      </div>
   )
}

export default App
