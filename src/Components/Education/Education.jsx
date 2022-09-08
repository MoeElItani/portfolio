import React from 'react'
// Styles
import './Education.scss'
// Images
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Card from '../Card/Card'

const Education = ({ darkMode }) => {
   return (
      <div className='technologies'>
         {/* Left Side */}
         <div className='myEducation'>
            <span style={{ color: darkMode ? '#eee' : '' }}>
               My
            </span>
            <span>Education</span>
            <span style={{ color: darkMode ? '#ccc' : '' }}>
               Even though education is important, I was aware
               that it's not enough...
               <br />
               so I always tried studying online courses
               specifically related to web
               <br />
               development alongside my school education
            </span>

            <div
               className='t-blur2'
               style={{ background: '#ABF1FF94' }}
            />
         </div>
         {/* Right Side */}
         <div className='cards'>
            <div style={{ left: '20rem' }}>
               <Card
                  darkMode={darkMode}
                  emoji={HeartEmoji}
                  title='BS in Computer Science'
                  school='Lebanese International University'
                  year='(2018 - 2022)'
               />
            </div>
            <div className='cards'>
               <div style={{ left: '-1rem', top: '12rem' }}>
                  <Card
                     darkMode={darkMode}
                     emoji={Glasses}
                     title='BT in Information Technology'
                     school='C.I.S College'
                     year='(2015-2017)'
                  />
               </div>
            </div>

            <div className='blur t-blur1' />
            <div className='blur t-blur2' />
         </div>
      </div>
   )
}

export default Education
