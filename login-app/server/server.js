const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Database setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // replace with your username
  password: 'password', // replace with your password
  database: 'login_app',
});

app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query('SELECT username FROM users WHERE username = ?', [username], (err, result) => {
    if (result.length > 0) {
      res.json({ success: false, message: 'Username already exists' });
    } else {
      db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
        if (err) {
          res.json({ success: false, message: 'Registration failed' });
        } else {
          res.json({ success: true });
        }
      });
    }
  });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
    if (result.length > 0) {
      const user = result[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (isMatch) {
          req.session.user = user;
          res.json({ success: true });
        } else {
          res.json({ success: false, message: 'Invalid credentials' });
        }
      });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
