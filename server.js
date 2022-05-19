const db = require("./db/connection");
const express = require("express");
const startInquirer = require("./lib/departments");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware express
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// (Not Found) Default error response
app.use((req, res) => {
  res.status(404).end();
});

// Start server after connection established with database
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}. That's jazz!`);
    startInquirer();
  });
});