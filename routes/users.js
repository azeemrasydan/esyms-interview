const express = require('express');
const router = express.Router();

// ------------ Importing Controllers ------------//
const userController = require('../controllers/userController');

//------------ Update User Info ------------//
router.post('/:id', userController.update);

module.exports = router;