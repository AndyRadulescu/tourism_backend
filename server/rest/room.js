const express = require('express');
const router = express.Router();
const Room = require('../controller/room-controller');

router.post('/', Room.getHotelsByCountryLocation);

module.exports = router;