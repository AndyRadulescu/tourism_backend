const express = require('express');
const router = express.Router();
const user = require('../controller/').user;

router.get('/', user.getAllUsers);
router.post('/', user.insertUser);
router.post('/sync', user.syncUser);
router.post('/login', user.loginUser);

module.exports = router;