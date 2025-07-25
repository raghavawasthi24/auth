const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // <-- ADD THIS
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/user.route');

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(cors({
    origin: (origin, callback) => {
      callback(null, origin || "*");
    },
    credentials: true
  }));

connectDB();

// Routes
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
