const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
const { isPersonnel , isPatient } = require('../config/checkPriviledge');

// ------------ Importing Controllers ------------//
const patientsController = require('../controllers/patientsController');

//------------ Root Route ------------//
router.get('/', ensureAuthenticated, isPersonnel, patientsController.get);
router.post('/', ensureAuthenticated, isPersonnel, patientsController.create.post);

//------------ Create New Patient Route ------------//
router.get('/create', ensureAuthenticated, isPersonnel, patientsController.create.get);

//------------ Patient ID Route ------------//
router.post('/:id', ensureAuthenticated, patientsController.updateById);
router.post('/delete/:id', ensureAuthenticated, isPersonnel, patientsController.deleteById);

//------------ Create Address ID Route ------------//
router.get('/addresses/create/:id', ensureAuthenticated, patientsController.createAddress.get);
router.post('/addresses/create/:id', ensureAuthenticated, patientsController.createAddress.post);

//------------ Update Address ID Route ------------//
router.post('/addresses/delete/:id', ensureAuthenticated,  patientsController.address.delete);

//------------ Create NextofKin ID Route ------------//
router.get('/nextofkin/create/:id', ensureAuthenticated,  patientsController.createNextOfKin.get);
router.post('/nextofkin/create/:id', ensureAuthenticated,patientsController.createNextOfKin.post);

//------------ Update Address ID Route ------------//
router.post('/nextofkin/delete/:id', ensureAuthenticated,  patientsController.nextOfKin.delete);

//------------ PATIENT PROFILE EDIT ------------//
//------------ Update Patient Detail Route ------------//
router.get('/profile', ensureAuthenticated, isPatient, patientsController.profile.get);

module.exports = router;