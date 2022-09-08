import React from 'react'
// Styles
import './Footer.scss'
// Images & Icons
import footer from '../../img/wave.png'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'

const Footer = () => {
   return (
      <div className='footer'>
         <img
            src={footer}
            alt='footer'
            style={{ width: '100vw' }}
         />
         <div className='f-content'>
            <span>mhmd98itani@gmail.com</span>
            <div className='f-icons'>
               <a
                  href='https://github.com/MoeElItani'
                  target='_blank'
                  rel='noreferrer'
               >
                  <GitHub color='#fff' size='3rem' />
               </a>
               <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/mohammad-el-itani/'
               >
                  <LinkedIn color='#fff' size='3rem' />
               </a>
               <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.instagram.com/_mhmditani'
               >
                  <Instagram color='#fff' size='3rem' />
               </a>
            </div>
            <span className='f-copyrights'>
               &copy; 2022 Mohammad El Itani | All Rights
               Reserved
            </span>
         </div>
      </div>
   )
}

export default Footer
