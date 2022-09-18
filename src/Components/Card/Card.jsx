import React from 'react'
// Styles
import './Card.scss'

const Card = ({ emoji, title, school, year, darkMode }) => {
   return (
      <div
         className='card'
         style={{ background: darkMode ? '#333' : '' }}
      >
         <img src={emoji} alt='emoji' />
         <span>{title}</span>
         <span style={{ color: darkMode ? '#eee' : '' }}>
            {school}
         </span>
         <span style={{ color: darkMode ? '#ccc' : '' }}>
            {year}
         </span>
      </div>
   )
}

export default Card
