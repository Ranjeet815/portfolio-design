import React, { useState } from 'react'
import { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8j4rm2l', 'template_9kl22d7', form.current, '1XcN1GLkN65fi6mhT')
      .then((result) => {
          console.log(result.text);
              setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact-form'>
        <div className='w-left'>
            <div className='awesome'>
                <span>Get in Touch</span>
                <span>Contact me </span>
            <div className='blur s-blur1' style={{background:"#ABf1FF94"}}>
            </div>
            </div>
        </div>

<div className='c-right'>
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='user_name' className='user' placeholder='name'/>
        <input type="email" name="user_email" className='user' placeholder='Email'/>
        <textarea name='message' className='user' placeholder='message'/>
        <input type="submit" value="send" className="button"/>
        <span >{done && "Thanks contacting Me"}</span>
        <div className="blur c-blur1" style={{background: "var(--purple)"}}>
        </div>

    </form>
</div>


    </div>
  )
}

export default Contact