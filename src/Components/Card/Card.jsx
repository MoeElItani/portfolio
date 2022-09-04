import React from 'react'
// Styles
import './Card.scss'

const Card = ({ emoji, title, school, year }) => {
   return (
      <div className='card'>
         <img src={emoji} alt='emoji' />
         <span>{title}</span>
         <span>{school}</span>
         <span>{year}</span>
      </div>
   )
}

export default Card
