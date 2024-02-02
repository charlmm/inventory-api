const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

router.use('/inventory', inventoryController);

module.exports = router;
