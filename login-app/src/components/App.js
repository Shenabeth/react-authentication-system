import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SecurePage from './SecurePage';

// Paths to all webpages
function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect the root route to /signin */}
        <Route path="/" element={<Navigate to="/signin" />} />
        
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/securepage" element={<SecurePage />} />
      </Routes>
    </Router>
  );
}

export default App;
