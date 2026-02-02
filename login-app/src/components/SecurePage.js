import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

function SecurePage() {
  // React Router navigation
  const navigate = useNavigate();

  // Handle Logout process
  const handleLogout = () => {
    // Clears the user session
    // Adjust this according to how session is stored
    localStorage.removeItem('userToken');
    
    // Redirect to the Sign In page
    navigate('/signin');
  };

  // Webpage style here
  return (
    <div className="app-container">
      <div className="header">
        <img src="/nasa.ico" alt="NASA Logo" className="favicon" />
        <h1>NASA's Secrets</h1>
      </div>
      <div className="content">
        <h1>NASA's Secret</h1>
        <p>I don't know. You were pranked.</p>
        <button className="button-logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default SecurePage;
