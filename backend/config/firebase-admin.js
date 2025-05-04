// backend/config/firebase-admin.js
const admin = require('firebase-admin');
const serviceAccount = require('../path-to-your-firebase-admin-sdk.json'); // Add your Firebase admin SDK file here

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
