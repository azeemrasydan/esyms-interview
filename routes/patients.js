const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
const { isPersonnel } = require('../config/checkPriviledge');

// ------------ Importing Controllers ------------//
const patientsController = require('../controllers/patientsController');

//------------ Patient Route ------------//
router.get('/', ensureAuthenticated, isPersonnel, patientsController.get);

//------------ Create New Patient Route ------------//
router.get('/create', ensureAuthenticated, isPersonnel, patientsController.create.get);
// router.post('/create', ensureAuthenticated,patientsController.createPost);

module.exports = router;