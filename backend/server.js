// server.js

require("dotenv").config({ path: require('path').resolve(__dirname, '../.env') });

const express = require("express");
const cloudinary = require("./config/cloudinary");
const admin = require('./config/firebase-admin');  // Your Firebase Admin SDK

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
  console.log('Cloudinary config loaded:', {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY ? '✅ present' : '❌ missing',
    api_secret: process.env.CLOUDINARY_API_SECRET ? '✅ present' : '❌ missing',
  });
});

// Verify Firebase token
app.post('/verify-token', async (req, res) => {
  const idToken = req.body.idToken;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    res.status(200).json({ message: 'User authenticated', uid: decodedToken.uid });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Start server
app.listen(5000, '0.0.0.0', () => {
  console.log("Server is running on port 5000");
});