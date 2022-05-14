const mysql = require("mysql2");

require('dotenv').config()

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username
    user: process.env.user_mB,
    // MySQL password
    password: process.env.pw_mB,
    database: process.env.name_mB
  },
  console.log("Connected to myBusiness database.")
);

module.exports = db;