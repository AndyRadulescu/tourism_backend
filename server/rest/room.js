const express = require('express');
const router = express.Router();
const Room = require('../controller/room-controller');

router.post('/', Room.getHotelsByCountryLocation);
router.get('/', Room.getRoomsByUserId);

module.exports = router;