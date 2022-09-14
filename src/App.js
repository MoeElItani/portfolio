// Styles
import './App.scss'
// Components
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Education from './Components/Education/Education'
import Technologies from './Components/Technologies/Technologies'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
// Imports
import { themeContext } from './Context'
import { useContext } from 'react'

function App() {
   const theme = useContext(themeContext)
   const darkMode = theme.state.darkMode
   const transition = { duration: 2, type: 'spring' }
   return (
      <div
         className='App'
         style={{
            background: darkMode ? '#222' : '',
            color: darkMode ? '#eee' : '',
         }}
      >
         <Navbar transition={transition} />
         <Intro
            darkMode={darkMode}
            transition={transition}
         />
         <Education
            darkMode={darkMode}
            transition={transition}
         />
         <Technologies
            darkMode={darkMode}
            transition={transition}
         />
         <Contact
            darkMode={darkMode}
            transition={transition}
         />
         <Footer />
      </div>
   )
}

export default App
