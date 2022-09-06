import React from 'react'
// Styles
import './Technologies.scss'

import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

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
                  <img src={Upwork} alt='Upwork' />
               </div>
               <div className='t-secCircle'>
                  <img src={Fiverr} alt='Fiverr' />
               </div>
               <div className='t-secCircle'>
                  <img src={Amazon} alt='Amazon' />
               </div>
               <div className='t-secCircle'>
                  <img src={Shopify} alt='Shopify' />
               </div>
               <div className='t-secCircle'>
                  <img src={Facebook} alt='Facebook' />
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
