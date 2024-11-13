require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to get all users
app.get('/api/admin/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      res.json(results);
    }
  });
});

// Route to update user status (suspend/activate)
app.put('/api/admin/users/:id', (req, res) => {
  const userId = req.params.id;
  const { action } = req.body;

  let status;
  if (action === 'suspend') {
    status = 'suspended';
  } else if (action === 'activate') {
    status = 'active';
  } else {
    return res.status(400).json({ error: 'Invalid action' });
  }

  db.query('UPDATE users SET status = ? WHERE id = ?', [status, userId], (err, result) => {
    if (err) {
      console.error('Error updating user status:', err);
      res.status(500).json({ error: 'Error updating user status' });
    } else {
      res.json({ message: `User ${action}d successfully` });
    }
  });
});

// Route to get all property listings
app.get('/api/admin/properties', (req, res) => {
  db.query('SELECT * FROM properties', (err, results) => {
    if (err) {
      console.error('Error fetching properties:', err);
      res.status(500).json({ error: 'Error fetching properties' });
    } else {
      res.json(results);
    }
  });
});

// Route to update property status (approve/reject)
app.put('/api/admin/properties/:id', (req, res) => {
  const propertyId = req.params.id;
  const { status } = req.body;

  db.query('UPDATE properties SET status = ? WHERE id = ?', [status, propertyId], (err, result) => {
    if (err) {
      console.error('Error updating property status:', err);
      res.status(500).json({ error: 'Error updating property status' });
    } else {
      res.json({ message: `Property ${status}d successfully` });
    }
  });
});

// Route to generate analytics report
app.get('/api/admin/analytics', (req, res) => {
  db.query('SELECT COUNT(*) AS userCount FROM users', (err, results) => {
    if (err) {
      console.error('Error generating analytics report:', err);
      res.status(500).json({ error: 'Error generating analytics report' });
    } else {
      res.json({
        userCount: results[0].userCount,
        // Add more metrics as needed
      });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
