import React from 'react'
import '../styles/Contact.css'
import wp from '../assets/Images/whatsapp.png'
import email from '../assets/Images/email.png'


const Contact = () => {
  return (
    <section className='contact'>
        <p>CONTACTANOS</p>
        <div>
            <a href="https://api.whatsapp.com/send/?phone=5491130162000">
                <img src={wp} alt='WhatsApp'/>
            </a>
            <a href="mailto:internacional@auroimport.ar">
              <img src={email} alt='Email'/>
            </a>
        </div>
    </section>
  )
}

export default Contact