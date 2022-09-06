// Imports
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
// Styles
import './Contact.scss'

const Contact = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [msg, setMsg] = useState('')
   const [done, setDone] = useState(false)
   const [err, setErr] = useState(false)

   const form = useRef()

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm(
            'Mohammad_El_Itani',
            'template_r79ql3g',
            form.current,
            'tXaK06X1yEq1DQ8Uy'
         )
         .then(
            (result) => {
               console.log(result.text)
               setDone(true)
               setErr(false)
            },
            (error) => {
               console.log(error.text)
               setErr(true)
               setDone(false)
            }
         )
      setName('')
      setEmail('')
      setMsg('')
   }

   return (
      <div className='contact-form'>
         <div className='c-left'>
            <div className='c-left'>
               <span>Get in touch</span>
               <span>Contact me</span>
               <div
                  className='blur c-blur1'
                  style={{ background: '#abf1ff94' }}
               />
               <div className='blur c-blur2' />
            </div>
         </div>

         <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
               <input
                  type='text'
                  name='from_name'
                  className='user'
                  placeholder='Name'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
               />
               <input
                  type='email'
                  name='from_email'
                  className='user'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
               />
               <textarea
                  name='message'
                  type='message'
                  className='user'
                  placeholder='Message'
                  onChange={(e) => setMsg(e.target.value)}
                  value={msg}
                  required
               />
               <input
                  type='submit'
                  value='Send'
                  className='button'
               />
               <span>
                  {done &&
                     'I received your message, thanks for contacting me!'}
               </span>
               <span style={{ color: 'red' }}>
                  {err &&
                     'Something went wrong, please try again later!'}
               </span>
            </form>
         </div>
      </div>
   )
}

export default Contact
