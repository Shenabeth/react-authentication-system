// src/utils/auth.js
export const login = async (username, password) => {
  const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
  });

  if (response.ok) {
      return response.json(); // Handle successful login (e.g., returning session token)
  } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
  }
};

export const register = async (username, password) => {
  const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
  });

  if (response.ok) {
      return response.json(); // Handle successful registration
  } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
  }
};
