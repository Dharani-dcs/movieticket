const express = require('express');
const app = express();
const mysql = require('mysql2');

//port number
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Import the API modules
const api1 = require('./movie');
const api2 = require('./movie');
const register = require('./UserRegister');
// Use the API modules as middleware
app.use('/movie', api1);
app.use('/movie', api2);
app.use('/register',register);
