const admin = require('firebase-admin');
const config = require('config');

const serviceAccount = JSON.parse(config.get('firebase.key'));
const databaseURL = config.get('firebase.url');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL
});

const db = admin.database();

module.exports = db;