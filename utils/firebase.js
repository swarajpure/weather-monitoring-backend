const admin = require('firebase-admin');
const config = require('config');

const serviceAccount = config.get('firestore.key');
const databaseURL = config.get('firestore.url');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL
});

const db = admin.database();

module.exports = db;