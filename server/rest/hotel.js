const express = require('express');
const router = express.Router();
const Hotel = require('../controller').hotel;

router.post('/', Hotel.getHotelsByCountryLocation);

module.exports = router;