import React from 'react'
// Styles
import './Navbar.scss'

const Navbar = () => {
   return (
      <div className='n-wrapper'>
         <div className='n-left'>
            {/* Logo & theme */}
            <div className='n-name'>Mohammad El Itani</div>
            <span>toggle</span>
         </div>
         <div className='n-right'>
            {/* Navbar List  & Contact Button */}
            <div className='n-list'>
               <ul>
                  <li>Home</li>
                  <li>Services</li>
                  <li>Experience</li>
                  <li>Portfolio</li>
                  <li>Testimonials</li>
               </ul>
            </div>
            <button className='button n-button'>Contact</button>
         </div>
      </div>
   )
}

export default Navbar
