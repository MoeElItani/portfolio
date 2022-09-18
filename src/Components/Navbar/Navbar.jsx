import React from 'react'
import Toggle from '../Toggle/Toggle'
// Styles
import './Navbar.scss'
// Imports
import { Link } from 'react-scroll'

const Navbar = ({ transition }) => {
   return (
      <div className='n-wrapper'>
         <div className='n-left'>
            {/* Logo & theme */}
            <div className='n-name'>Mohammad El Itani</div>
            <Toggle />
         </div>
         <div className='n-right'>
            {/* Navbar List  & Contact Button */}
            <div className='n-list'>
               <ul>
                  <Link
                     spy={true}
                     to='Navbar'
                     smooth={true}
                     activeClass='activeClass'
                  >
                     <li>Home</li>
                  </Link>
                  <Link
                     spy={true}
                     to='Education'
                     smooth={true}
                  >
                     <li>Education</li>
                  </Link>
                  <Link
                     spy={true}
                     to='Technologies'
                     smooth={true}
                  >
                     <li>Technologies</li>
                  </Link>
               </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
               <button className='button n-button'>
                  Contact
               </button>
            </Link>
         </div>
      </div>
   )
}

export default Navbar
