const admin = require('firebase-admin');

// Sign up service
async function signup(email, password) {
  const user = await admin.auth().createUser({
    email,
    password,
  });
  return user;
}

// Login service
async function login(email, password) {
  const userRecord = await admin.auth().getUserByEmail(email);
  const token = await admin.auth().createCustomToken(userRecord.uid);
  return token;
}

module.exports = { signup, login };
