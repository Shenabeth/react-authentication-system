// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css'; // Import the main CSS file for global styling
import App from './components/App'; // Import the App component that will handle the routing

// Select the root element in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
