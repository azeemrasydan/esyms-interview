const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')

// ------------ Importing Controllers ------------//
const patientsController = require('../controllers/patientsController');

//------------ Patient Route ------------//
router.get('/', ensureAuthenticated,patientsController.get);

//------------ Create New Patient Route ------------//
router.get('/create', ensureAuthenticated,patientsController.create.get);
// router.post('/create', ensureAuthenticated,patientsController.createPost);

module.exports = router;