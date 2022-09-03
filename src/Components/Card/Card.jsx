import React from 'react'
// Styles
import './Card.scss'

const Card = ({ emoji, heading, detail, more }) => {
   return (
      <div className='card'>
         <img src={emoji} alt='emoji' />
         <span>{heading}</span>
         <span>{detail}</span>
         <a href={more} target='_blank' rel='noreferrer'>
            <button className='c-button'>Learn more</button>
         </a>
      </div>
   )
}

export default Card
