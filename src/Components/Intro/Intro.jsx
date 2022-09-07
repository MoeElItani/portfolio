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
import Resume from '../../Resume/LinkedIn Profile.pdf'

const Intro = () => {
   return (
      <div className='intro'>
         {/* left Side */}
         <div className='i-left'>
            <div className='i-name'>
               <span>Hi I Am</span>
               <span>Mohammad El Itani</span>
               <span>
                  I'm a Front-End Web Developer <br /> I'm also a
                  Fresh Computer Science Graduate <br />
                  Please check my Resume by clicking the download
                  button below
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
                     <img src={LinkedIn} alt='LinkedIn Icon' />
                  </a>
                  <a
                     target='_blank'
                     rel='noreferrer'
                     href='https://www.instagram.com/_mhmditani'
                  >
                     <img src={Instagram} alt='Instagram Icon' />
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
            <img src={GlassesEmoji} alt='Glasses Emoji' />
            {/* Floating Mini Cards */}
            <div
               style={{
                  top: '-4%',
                  left: '68%',
               }}
            >
               <FloatingDiv
                  img={Crown}
                  txt1='Front-End'
                  txt2='Developer'
               />
            </div>
            <div
               style={{
                  top: '19.5rem',
                  left: '2.8rem',
               }}
            >
               <FloatingDiv
                  img={ThumbUp}
                  txt1='Computer Science'
                  txt2='Fresh Graduate'
               />
            </div>
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
