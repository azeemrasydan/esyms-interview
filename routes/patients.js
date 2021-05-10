const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
const { isPersonnel } = require('../config/checkPriviledge');

// ------------ Importing Controllers ------------//
const patientsController = require('../controllers/patientsController');

//------------ Root Route ------------//
router.get('/', ensureAuthenticated, isPersonnel, patientsController.get);
router.post('/', ensureAuthenticated, isPersonnel, patientsController.create.post);

//------------ Create New Patient Route ------------//
router.get('/create', ensureAuthenticated, isPersonnel, patientsController.create.get);

//------------ Patient ID Route ------------//
router.post('/:id', ensureAuthenticated, isPersonnel, patientsController.updateById);
router.post('/delete/:id', ensureAuthenticated, isPersonnel, patientsController.deleteById);

module.exports = router;