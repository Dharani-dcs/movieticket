const express = require('express');
const router = express.Router();
const db = require('./database'); // Import the MySQL connection
const bodyParser = require('body-parser');
router.use(bodyParser.json());
// Define routes and API endpoints using the 'router' object
router.post('/', (req, res) => {
    const { FirstName, LastName, Email, PhoneNumber, Password } = req.body;
  
    // Insert the user data into the database
    const sql = 'INSERT INTO User (FirstName, LastName, Email, PhoneNumber, Password) VALUES (?, ?, ?, ?, ?)';
    const values = [FirstName, LastName, Email, PhoneNumber, Password];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      console.log('User registered:', result.insertId);
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
// Export the router
module.exports = router;
