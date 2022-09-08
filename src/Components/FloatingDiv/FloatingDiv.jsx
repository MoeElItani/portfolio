import React from 'react'
// Styles
import './FloatingDiv.scss'

const FloatingDiv = ({ img, txt1, txt2, darkMode }) => {
   return (
      <div className='floatingDiv' style={{ background: darkMode ? '#eee' : '' }}>
         <img src={img} alt='Crown' />
         <span style={{ color: darkMode ? '#000' : '' }}>
            {txt1}
            <br />
            {txt2}
         </span>
         <img src='' alt='' />
      </div>
   )
}

export default FloatingDiv
