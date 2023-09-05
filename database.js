const mysql = require('mysql2');
//database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dharani28',
    database: 'movieticket',
  });

const theaterId = 1; // Replace with the actual theater ID
const showtimes = [1, 2 ,3, 4];

// Generate and insert seat data for each showtime
for (const showtime of showtimes) {
  for (let row = 1; row <= 6; row++) { // Assuming 6 rows of seats
    for (let seatNumber = 1; seatNumber <= 10; seatNumber++) { // 10 seats per row
      const seat = `Row ${row}, Seat ${seatNumber}`;
      const query = 'INSERT INTO Seat (TheaterID, SeatNumber, ShowtimeID) VALUES (?, ?, ?)';
      const values = [theaterId, seat, showtime];

      connection.query(query, values, (err, results) => {
        if (err) {
          console.error('Error inserting seat:', err);
        } else {
          console.log(`Inserted seat: ${seat} for showtime: ${showtime}`);
        }
      });
    }
  }
}
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
  });
  module.exports = connection;