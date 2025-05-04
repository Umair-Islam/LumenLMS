// backend/config/firebase-admin.js
const admin = require('firebase-admin');
const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK); // Add your Firebase admin SDK file here

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
  