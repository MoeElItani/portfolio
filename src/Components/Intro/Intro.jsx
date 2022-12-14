import React from 'react'
// Styles
import './Intro.scss'
// Icons & Images
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Me from '../../img/ME.png'
import ThumbUp from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import GlassesEmoji from '../../img/glassesimoji.png'
// Other Components
import FloatingDiv from '../FloatingDiv/FloatingDiv'
// Resume
import Resume from '../../Resume/Mohammad El Itani - Resume.pdf'
//imports
import { motion } from 'framer-motion'

const Intro = ({ darkMode, transition }) => {
   return (
      <div className='intro'>
         {/* left Side */}
         <div className='i-left'>
            <div className='i-name'>
               <span
                  style={{ color: darkMode ? '#eee' : '' }}
               >
                  Hi I Am
               </span>
               <span>Mohammad El Itani</span>
               <span
                  id='subSpan'
                  style={{ color: darkMode ? '#ccc' : '' }}
               >
                  I'm a Fresh Computer Science Graduate and
                  a Junior React Front-End Developer
                  <br />
                  You can Download my Resume below
               </span>
               <a href={Resume}>
                  <button className='button t-button'>
                     Download CV
                  </button>
               </a>
               <div className='i-icons'>
                  <a
                     target='_blank'
                     rel='noreferrer'
                     href='https://github.com/MoeElItani'
                  >
                     <img src={Github} alt='Github Icon' />
                  </a>
                  <a
                     target='_blank'
                     rel='noreferrer'
                     href='https://www.linkedin.com/in/mohammad-el-itani/'
                  >
                     <img
                        src={LinkedIn}
                        alt='LinkedIn Icon'
                     />
                  </a>
                  <a
                     target='_blank'
                     rel='noreferrer'
                     href='https://www.instagram.com/_mhmditani'
                  >
                     <img
                        src={Instagram}
                        alt='Instagram Icon'
                     />
                  </a>
               </div>
            </div>
         </div>
         {/* Right Side */}
         <div className='i-right'>
            {/* Images */}
            <img src={Vector1} alt='Vector1' />
            <img src={Vector2} alt='Vector2' />
            <img src={Me} alt='Mohammad El Itani' />
            <motion.img
               initial={{ left: '-30%' }}
               whileInView={{ left: '-20%' }}
               transition={transition}
               src={GlassesEmoji}
               alt='Glasses Emoji'
            />
            {/* Floating Mini Cards */}
            <motion.div
               className='floating-div'
               initial={{ left: '75%' }}
               whileInView={{ left: '65%' }}
               transition={transition}
               style={{
                  top: '-4%',
                  left: '68%',
                  width: '14rem',
               }}
            >
               <FloatingDiv
                  img={ThumbUp}
                  txt1='Computer Science'
                  txt2='Fresh Graduate'
                  darkMode={darkMode}
               />
            </motion.div>
            <motion.div
               className='floating-div'
               style={{
                  top: '19.5rem',
                  left: '2.8rem',
                  width: '14rem',
               }}
            >
               <FloatingDiv
                  img={Crown}
                  txt1='React Front-End'
                  txt2='Developer'
                  darkMode={darkMode}
               />
            </motion.div>
            {/* blur div(s) */}
            <div className='blur' />
            <div
               className='blur'
               style={{
                  background: '#c1f5ff',
                  top: '15rem',
                  left: '-5rem',
                  width: '21rem',
               }}
            />
         </div>
      </div>
   )
}

export default Intro
