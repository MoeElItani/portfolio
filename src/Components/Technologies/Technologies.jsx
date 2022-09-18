import React from 'react'
// Styles
import './Technologies.scss'
// Images
import html from '../../img/html.png'
import scss from '../../img/scss.png'
import react from '../../img/react.png'
import javascript from '../../img/javascript.png'
import redux from '../../img/redux.png'
// Imports
import { motion } from 'framer-motion'

const Technologies = ({ darkMode, transition }) => {
   return (
      <div
         className='technologies'
         id='Technologies'
         style={{ marginTop: '15rem' }}
      >
         {/* Left Side */}
         <div className='myEducation' id='leftSide'>
            <span style={{ color: darkMode ? '#eee' : '' }}>
               Front-End
            </span>
            <span>Technologies</span>
            <span style={{ color: darkMode ? '#ccc' : '' }}>
               I constantly look for the newest and most
               demanded technologies to learn
               <br />
               and improve my skill set, here are some of
               the most important ones:
            </span>
            <div
               className='t-blur2'
               style={{ background: '#ABF1FF94' }}
            />
         </div>

         {/* Right Side */}
         <div className='t-right'>
            <motion.div
               transition={transition}
               initial={{ rotate: '60deg' }}
               whileInView={{ rotate: '0deg' }}
               viewport={{ margin: '-40px' }}
               className='t-mainCircle'
               style={{
                  background: darkMode ? '#333' : '',
               }}
            >
               <div
                  className='t-secCircle'
                  style={{
                     background: darkMode ? '#555' : '',
                     border: darkMode
                        ? '4px solid #aaa'
                        : '',
                  }}
               >
                  <img src={html} alt='html' />
               </div>
               <div
                  className='t-secCircle'
                  style={{
                     background: darkMode ? '#555' : '',
                     border: darkMode
                        ? '4px solid #aaa'
                        : '',
                  }}
               >
                  <img src={scss} alt='scss' />
               </div>
               <div
                  className='t-secCircle'
                  style={{
                     background: darkMode ? '#555' : '',
                     border: darkMode
                        ? '4px solid #aaa'
                        : '',
                  }}
               >
                  <img src={react} alt='react' />
               </div>
               <div
                  className='t-secCircle'
                  style={{
                     background: darkMode ? '#555' : '',
                     border: darkMode
                        ? '4px solid #aaa'
                        : '',
                  }}
               >
                  <img src={javascript} alt='javascript' />
               </div>
               <div
                  className='t-secCircle'
                  style={{
                     background: darkMode ? '#555' : '',
                     border: darkMode
                        ? '4px solid #aaa'
                        : '',
                  }}
               >
                  <img src={redux} alt='redux' />
               </div>
            </motion.div>
            {/* Background Circles */}
            <div className='t-backCircle blueCircle'></div>
            <div className='t-backCircle yellowCircle'></div>
         </div>
      </div>
   )
}

export default Technologies
