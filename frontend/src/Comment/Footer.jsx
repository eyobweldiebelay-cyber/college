import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Footer.css';
import {
    FaTelegram,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaGithub
    
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Website */}
        <div className="footer-section">
          <h2>Web@Eyob</h2>

          <p>
            Learn something useful.
            Build something real.
            Become a better developer.
          </p>
        </div>


        {/* Website Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <NavLink to="/dashboard">
            Home
          </NavLink>

          <NavLink to="/dashboard/contact">
            Contact
          </NavLink>

          <NavLink to="/dashboard/profile">
            Profile
          </NavLink>

          <NavLink to="/dashboard/about">
            About Us
          </NavLink>

          <NavLink to="/dashboard/privacy">
            Privacy
          </NavLink>
        </div>


        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Me</h3>

        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
    <FaLinkedin />
   </a>

         <a href="https://youtube.com/@youryoutube" target="_blank" rel="noreferrer">
    <FaYoutube />
    </a>

          <a href="https://t.me/yourusername" target="_blank" rel="noreferrer">
           <FaTelegram />
           </a>
             <a href="https://github.com/eyobweldiebelay-cyber" target="_blank" rel="noreferrer">
        <FaGithub />
                </a>
<a href="https://instagram.com/yourinstagram" target="_blank" rel="noreferrer">
    <FaInstagram />
</a>

     <a href="https://facebook.com/yourfacebook" target="_blank" rel="noreferrer">
    <FaFacebook />
     </a>
        </div>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">

      <p>
         © {new Date().getFullYear()} Web@Eyob. All rights reserved.
</p>

      </div>

    </footer>
  );
}

export default Footer;