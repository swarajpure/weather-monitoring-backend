const firebase = require('../utils/firebase');
const dbRef = firebase.ref();
const weatherRef = dbRef.child('weather-details');

const fetchWeatherDetails = async () => {
  try {
    const snapshot = await weatherRef.get();
    if (snapshot.exists()) {
      return snapshot.val();
    }
    else {
      return null;
    }
  } catch (err) {
    console.log(`Error fetching from firebase: ${err}`);
    throw err;
  }
}

module.exports = { fetchWeatherDetails };
