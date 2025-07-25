const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // <-- ADD THIS
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/user.route');

const app = express();

// Middleware
app.use(bodyParser.json());

// CORS Middleware
app.use(cors({
  origin: 'https://auth-bice-nu.vercel.app/', // React frontend URL
  credentials: true
}));

// Connect DB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
