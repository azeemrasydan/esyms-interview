//------------ User Model ------------//
const User = require('../models/User');
const Unit = require('../models/Unit');

//------------ Update Handle ------------//
exports.update = (req, res) => {

    //------------ If there is a unit information in update body ------------//
    if (req.body.unit) {

        Unit.findById(req.body.unit, (err, unit) => {

            if (err) {
                console.log(err);
            } else {

                User.updateOne({ _id: req.params.id }, { $set: { unit: unit } }, (err, user) => {

                    if (err) {
                        console.log(err);
                    } else {

                        res.redirect('/dashboard');

                    }
                });


            }


        })


    } else {

        //------------ If there is NO unit information in update body ------------//
        User.updateOne({ _id: req.params.id }, { $set: req.body.user }, (err, user) => {

            if (err) {
                console.log(err);
            } else {

                res.redirect('/dashboard');

            }
        });

    }


};