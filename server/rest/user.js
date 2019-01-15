const express = require('express');
const router = express.Router();
const user = require('../controller/').user;

router.get('/', user.getAllUsers);
router.post('/', user.insertUser);
router.get('/sync', user.syncUser);
router.post('/login', user.loginUser);
router.post('/rooms', user.updateRooms);

module.exports = router;