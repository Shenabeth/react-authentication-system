import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../utils/auth'; // Ensure you have a register function
import '../styles/main.css';

function SignUp() { 
  // Handle username, password, and message states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  
  // React Router navigation
  const navigate = useNavigate();

  // Handle sign up
  const handleSubmit = async (e) => {
    // Prevent default form submission behavior (page reload)
    e.preventDefault();

    // Wait for register function result
    const result = await register(username, password);
    
    // Lead back to the sign in page if successful
    // Else show an error message
    if (result.success) {
      setMessage('Account created! Please log in.');
      navigate('/signin');
    } else {
      setMessage(result.message);
    }
  };

  // Webpage style here
  return (
    <div className="app-container">
      <div className="header">
        <img src="/nasa.ico" alt="NASA Logo" className="favicon" />
        <h1>NASA's Secrets</h1>
      </div>
      <div className="content">
        <h2>Sign Up</h2>
        <p>Create a new account.</p>
        {message && <p className="message">{message}</p>} {/* Displaying the message */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="password-container" style={{ position: 'relative' }}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                paddingRight: '50px',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            <button
              type="button"
              className="eye-button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '-5px',
                top: '30px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {/* This section uses the open and close eye icon for password visibility. */}
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  style={{ width: '24px', height: '24px' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  style={{ width: '24px', height: '24px' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </div>
          <button type="submit" className="button-submit">Sign Up</button>
        </form>
        <p style={{ fontSize: 'small', marginBottom: '5vh' }}>
          Already have an account? <a href="/signin" className="hyper-link">Sign In</a>
        </p> 
      </div>
    </div>
  );
}

export default SignUp;
