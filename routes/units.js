const express = require('express');
const router = express.Router();

// ------------ Importing Controllers ------------//
const unitController = require('../controllers/unitController');

//------------ Find All Route ------------//
router.get('/', unitController.findAll);

module.exports = router;