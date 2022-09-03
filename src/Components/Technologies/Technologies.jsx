import React from 'react'
// Styles
import './Technologies.scss'
// Images
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
// Resume
import Resume from './Technologies.scss'

const Technologies = () => {
   return (
      <div className='technologies'>
         {/* Left Side */}
         <div className='awesome'>
            <span>Technologies</span>
            <span>I've learned</span>
            <span>
               I constantly look for the newest and most demanded
               technologies to learn
               <br />
               and improve my skill set, here are some of the
               important ones:
            </span>
            <a href={Resume} download>
               <button className='button t-button'>
                  Download CV
               </button>
            </a>
            <div
               className='t-blur2'
               style={{ background: '#ABF1FF94' }}
            />
         </div>
         {/* Right Side */}
         <div className='cards'>
            <div style={{ left: '18rem' }}>
               <Card
                  emoji={HeartEmoji}
                  heading='React'
                  detail="Developed by Facebook, it's one of the most demanded JavaScript Libraries, in fact this portfolio is made using React!"
                  more='https://reactjs.org/'
               />
            </div>
            <div className='cards'>
               <div style={{ left: '-4rem', top: '12rem' }}>
                  <Card
                     emoji={Glasses}
                     heading='Redux Toolkit'
                     detail='One of the most used state management tools for JavaScript Applications!'
                     more='https://redux-toolkit.js.org/'
                  />
               </div>
            </div>
            <div className='cards'>
               <div style={{ left: '15rem', top: '24rem' }}>
                  <Card
                     emoji={Humble}
                     heading='SASS/SCSS'
                     detail="What's better than CSS Styling? Its most advanced and powerful superset, and as you might have guessed, it's being used to style this phenomenal portfolio"
                     more='https://sass-lang.com/'
                  />
               </div>
            </div>
            <div className="blur t-blur1"/>
            <div className="blur t-blur2"/>
         </div>
      </div>
   )
}

export default Technologies
