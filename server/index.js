const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/user.route');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect DB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
