const express = require('express');
const router = express.Router();
const dashController = require('../controllers/dashController')
const { ensureAuthenticated } = require('../config/checkAuth')

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', ensureAuthenticated,dashController.dashHandle);

module.exports = router;