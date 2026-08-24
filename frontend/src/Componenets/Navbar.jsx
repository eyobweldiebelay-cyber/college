import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {

  const navigate = useNavigate();

  // ADD: get logged-in user
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');

    // ADD: remove user when logout
    localStorage.removeItem('user');

    navigate('/login');
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <NavLink to="/dashboard">
          User Management System
        </NavLink>
      </div>

      <div className="navbar-menu">

        <NavLink to="/dashboard">
          Home
        </NavLink>

        <NavLink to="/dashboard/contact">
          Contact
        </NavLink>

        <NavLink to="/dashboard/profile">
         
        </NavLink>

        {/* ADD: username and email */}
        <div className="navbar-user">
    <span>👤</span>
    <strong>{user?.username}</strong>
    <small>{user?.email}</small>
</div>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;