const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
// const initializeModel = require('../models/index');

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dash', {
    name: req.user.name
}));

module.exports = router;