import React from 'react'
// Styles
import './Technologies.scss'

import html from '../../img/html.png'
import scss from '../../img/scss.png'
import react from '../../img/react.png'
import javascript from '../../img/javascript.png'
import redux from '../../img/redux.png'

const Technologies = () => {
   return (
      <div className='technologies'>
         {/* Left Side */}
         <div className='myEducation'>
            <span>Technologies</span>
            <span>I've Learned</span>
            <span>
               I constantly look for the newest and most demanded
               technologies to learn
               <br />
               and improve my skill set, here are some of the
               most important ones:
            </span>
            <div
               className='t-blur2'
               style={{ background: '#ABF1FF94' }}
            />
         </div>

         {/* Right Side */}
         <div className='t-right'>
            <div className='t-mainCircle'>
               <div className='t-secCircle'>
                  <img src={html} alt='html' />
               </div>
               <div className='t-secCircle'>
                  <img src={scss} alt='scss' />
               </div>
               <div className='t-secCircle'>
                  <img src={react} alt='react' />
               </div>
               <div className='t-secCircle'>
                  <img src={javascript} alt='javascript' />
               </div>
               <div className='t-secCircle'>
                  <img src={redux} alt='redux' />
               </div>

               {/* Background Circles */}
               <div className='t-backCircle blueCircle'></div>
               <div className='t-backCircle yellowCircle'></div>
            </div>
         </div>
      </div>
   )
}

export default Technologies
