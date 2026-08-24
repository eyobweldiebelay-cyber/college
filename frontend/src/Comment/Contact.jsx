import React from 'react'
 import {FaGithub } from 'react-icons/fa';
 import '../css/Contact.css'

function Contact() {
  return (
    <div className='page'>
        <strong>Contact Us</strong> <p>Welcome to User managenent System.</p>
         <div className="contact-info"> 
          <p><strong>Email:</strong> eyobweldiebelay@gmail.com</p>
         <p><strong>Phone:</strong> +251 705067699</p> 
         <p><strong>Address:</strong> Ethiopia ,Injibara</p>
         <a href="https://github.com/eyobweldiebelay-cyber" target="_blank" rel="noreferrer"> <FaGithub /> </a>
    </div>
    </div>
  );
}

export default Contact