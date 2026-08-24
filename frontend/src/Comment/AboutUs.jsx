import React from 'react'
import '../css/About.css'

function AboutUs() {
  return (
    <div>
        <h2>About Us</h2> <p> Welcome to User Management System. </p> 
        <div className="about-info">
             <h3>Our System</h3> 
        <p> This system helps manage users, roles, and user information in one simple and organized application. </p>
        <p> This project helped me learn both frontend and backend development, including React, Node.js, Express.js, MySQL, REST APIs, Axios, JWT authentication, authorization,
             database relationships, and CRUD operations. </p>
         <h3>Our Goal</h3>
         <p> Our goal is to provide a simple, secure, and easy-to-use user management system. </p> 
        </div>
        
    </div>
  )
}

export default AboutUs