const express = require('express');
const { createOrder } = require('../controllers/ordercontr');
const router = express.Router();

router.route('/order').post(createOrder); 

module.exports = router;