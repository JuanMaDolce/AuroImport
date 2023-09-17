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
        <p className='copy-right'>
          Auroimport SRL
        </p>
        <p className='copy-right'>
          Guayaquil 124 5° "A" (1419)       
        </p>
        <p className='copy-right'>
          Ciudad Autónoma de Buenos Aires       
        </p>
        <p className='copy-right'>
          CUIT 30-71780385-6          
        </p>
    </section>
  )
}

export default Contact