const express = require('express');
const path = require('path');

const userController = require('./controllers/user.controller.js');

const router = express.Router();


router.get('/users', (req, res) => {
	userController.getUser(req, res);
	res.send('foi');
});

module.exports = router;