const admin = require('firebase-admin');

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// database instance for the api
const db = admin.firestore();

module.exports = {
  db,
};
