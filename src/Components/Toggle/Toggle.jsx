import React from 'react'
// Styles
import './Toggle.scss'
// Icons
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
// Imports
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Toggle = () => {
   const theme = useContext(themeContext)
   const darkMode = theme.state.darkMode
   const clickHandler = () => {
      theme.dispatch({ type: 'toggle' })
   }
   return (
      <div
         onClick={clickHandler}
         className='toggle'
         style={darkMode ? {} : { border: '3px solid #333' }}
      >
         <Moon
            color={darkMode ? 'var(--orange)' : '#333'}
            size='1.25rem'
         />
         <Sun
            color={darkMode ? 'var(--orange)' : '#333'}
            size='1.25rem'
         />
         <div
            className='t-button'
            style={
               darkMode
                  ? {
                       left: '2px',
                       background: 'var(--orange)',
                       border: 'var(--orange)',
                    }
                  : { right: '2px', background: '#333' }
            }
         />
      </div>
   )
}

export default Toggle
