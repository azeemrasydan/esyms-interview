const express = require('express');
const router = express.Router();
const Unit = require('../models/Unit');
const { ensureAuthenticated } = require('../config/checkAuth')
//------------ Welcome Route ------------//
router.get('/', (req, res) => {

    if (!req.isAuthenticated()) {

        //------------ Guest Page Rendering ------------//
        res.render('welcome');
    } else {

        //------------ Check if there's additional information ------------//
        if (req.user.group) {

            //------------ Find unit information ------------//
            Unit.find({ _id: req.user.unit }, (err, unit) => {

                if (err) {
                    console.log(err);
                } else {
                    console.log(unit);


                    if (req.user.group == 2) {
                        //------------ Render Patient Page ------------//
                        res.render('patientMain', {
                            name: req.user.name,
                            unit: unit[0].name
                        })

                    } else {
                        //------------ Render Personnel Page ------------//
                        res.render('personnelMain', {
                            name: req.user.name,
                            unit: unit[0].name
                        })

                    }


                }

            })


        } else {

            //------------ Additional Information Page Rendering ------------//
            Unit.find({}, (err, units) => {
                res.render('unitCreate', {
                    units: units,
                    user: req.user
                })

            });


        }

    }

});

module.exports = router;