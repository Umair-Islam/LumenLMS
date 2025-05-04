// backend/config/firebase-admin.js
const admin = require('firebase-admin');
const serviceAccount = require('/workspaces/LumenLMS/backend/config/lumen-a9ef2-firebase-adminsdk-fbsvc-f77fd4727b.json'); // Add your Firebase admin SDK file here

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
  