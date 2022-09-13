import React from 'react'
// Styles
import './Toggle.scss'
// Icons
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
// Imports
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Toggle = () => {
   const theme = useContext(themeContext)
   const darkMode = theme.state.darkMode
   const clickHandler = () => {
      theme.dispatch({ type: 'toggle' })
   }
   const transition = {duration: '1', type: 'spring'}
   return (
      <motion.div
         onClick={clickHandler}
         className='toggle'
         style={
            darkMode ? {} : { border: '3px solid #333' }
         }
      >
         <Moon
            color={darkMode ? 'var(--orange)' : '#333'}
            size='1.25rem'
         />
         <Sun
            color={darkMode ? 'var(--orange)' : '#333'}
            size='1.25rem'
         />
         <motion.div
            className='t-button'
            transition={transition}
            initial={darkMode ? { left: '2px' } : { right: '2px' }}
            animate={darkMode? {right: '2px'}: {left:'2px'}}
            style={
               darkMode
                  ? {
                     //   left: '2px',
                       background: 'var(--orange)',
                       border: 'var(--orange)',
                    }
                  : { background: '#333' }                  
            }
         />
      </motion.div>
   )
}

export default Toggle
