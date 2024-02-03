const express = require('express');
const admin = require('firebase-admin');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

//protected routes
router.use('/inventory', validateFirebaseIdToken, inventoryController);

//define a middleware for the inventory routes
async function validateFirebaseIdToken(req, res, next) {
    const idToken = req.header('Authorization');

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken;
        return next();
    } catch (error) {
        console.error('Error validating Firebase ID token:', error);
        return res.status(403).json({ error: 'Unauthorized' });
    }
}

module.exports = router;
