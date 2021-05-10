//------------ User Model ------------//
const User = require('../models/User');
const Unit = require('../models/Unit');

//------------ Update Handle ------------//
exports.update = (req, res) => {

    let errors = [];

    //------------ If there is a unit information in update body ------------//
    if (req.body.unit) {

        Unit.findById(req.body.unit, (err, unit) => {

            if (err) {
                console.log(err);
            } else {

                //------------ Validate if staff is registering ------------//
                if (req.body.staffCode) {

                    //------------ Validate the Staff Registration Code ------------//
                    if (req.body.staffCode == "xxXasdfWdcsA") {

                        var group = 1;

                    } else {

                        //------------ Push for error for invalid code ------------//
                        errors.push({ msg: 'Staff Registration Code is invalid' });
                        console.log(unit);

                        //------------ Retrieve ALL units from MongoDB and pass the data to render unit assignment page ------------//
                        Unit.find({}, (err, units) => {
                            res.render('unitCreate', {
                                units: units,
                                user: req.user,
                                errors
                            })

                        });
                    }

                } else {
                    var group = 2;
                }

                //------------ Update the unit and the group of the user ------------//
                if (errors.length === 0) {

                    User.updateOne({ _id: req.params.id }, { $set: { unit: unit, group: group } }, (err, user) => {

                        if (err) {
                            console.log(err);
                        } else {

                            res.redirect('/patients');

                        }
                    });

                }




            }


        })


    } else {

        //------------ If there is NO unit information in update body ------------//
        User.updateOne({ _id: req.params.id }, { $set: req.body.user }, (err, user) => {

            if (err) {
                console.log(err);
            } else {

                res.redirect('/patients');

            }
        });

    }


};