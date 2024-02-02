// imports
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

// Routes import
const inventoryRoutes = require('./routes/inventoryRoutes');

//initialize backend server
const app = express();

app.use(cors({ origin: true }));

//test home route. 
app.get('/', (req, res) => {
    return res.status(200).send("hello there");
})

// Api endpoint routes
app.use('/v1', inventoryRoutes);

exports.api = functions.https.onRequest(app);
