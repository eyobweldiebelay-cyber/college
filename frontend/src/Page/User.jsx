import React, { useState } from 'react';
import api from '../api';
import '../css/Register.css';
import{Link}from 'react-router-dom'

function User() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validation errors
  const [userErr, setUserError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const[role,setRole]=useState('');

  // Server message
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    // Username validation
    if (!username || username.length < 3) {
      setUserError(
        'Username is required and must be at least 3 characters long'
      );
      isValid = false;
    } else {
      setUserError('');
    }

    // Email validation
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password || password.length < 8) {
      setPasswordError(
        'Password is required and must be at least 8 characters long'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    // STOP if frontend validation fails
    if (!isValid) {
      console.log('Form submission failed');
      return;
    }

    console.log('Form validation successful');

    // Send data to backend
    try {
      const res = await api.post('/user', {
        username: username,
        email: email,
        role:role,
        password: password
      });

      // Successful response
      console.log(res.data);

      setMessage(res.data.message);

      alert('User created successfully');

    } catch (err) {

      console.log(err.response?.data);

      // Email already exists
      if (err.response?.status === 409) {
        setMessage(err.response.data.message);
      } else {
        setMessage(
          err.response?.data?.message || 'Something went wrong'
        );
      }
    }
  };

  return (
    <div className='page'>
      <h1>{message}</h1>

      <form onSubmit={handleSubmit} className='form'>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />

        {userErr && (
          <p style={{ color: 'red' }}>
            {userErr}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        {emailError && (
          <p style={{ color: 'red' }}>
            {emailError}
          </p>
        )}
       <label>Role</label>
       <select name="role" value={role} className='select' onChange={(e)=>setRole(e.target.value) }>
         <option value="admin">admin</option>
         <option value="manager">manager</option>
         <option value="user">user</option>
       </select><br/><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        {passwordError && (
          <p style={{ color: 'red' }}>
            {passwordError}
          </p>
        )}

        <button type="submit" className='button'>
          Sign Up
        </button>
 <p>before Account Created ?<Link to={"/login"}>Login </Link></p>
      </form>
    </div>
  );
}

export default User;