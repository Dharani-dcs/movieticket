// api1.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // Import the MySQL connection

// Define routes and API endpoints using the 'router' object
router.get('/movie', (req, res) => {
  // Use 'db' (MySQL connection) to perform database operations
  // ...
  db.query('SELECT * FROM movies', (error, results, fields) => {
    if (error) {
      console.error('Error fetching data from MySQL: ' + error);
      res.status(500).json({ error: 'Error fetching data from the database' });
      return;
    }

    res.json(results);
  });
});
router.get('/:movieName', (req, res) => {
  const query = req.params.movieName;
  const queryText = query + '%'; // Append '%' to perform a prefix search

    db.query('SELECT MovieName FROM movies WHERE MovieName LIKE ?', [queryText], (error, results, fields) => {
        if (error) {
            console.error('Error fetching data from MySQL: ' + error);
            res.status(500).json({ error: 'Error fetching data from the database' });
            return;
        }
        res.json(results);
    });
});

// Export the router
module.exports = router;
