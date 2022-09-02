import React from 'react'
// Styles
import './FloatingDiv.scss'

const FloatingDiv = ({ img, txt1, txt2 }) => {
   return (
      <div className='floatingDiv'>
         <img src={img} alt='Crown' />
         <span>
            {txt1}
            <br />
            {txt2}
         </span>
         <img src='' alt='' />
      </div>
   )
}

export default FloatingDiv
