//------------ User Model ------------//
const User = require('../models/User');
const Unit = require('../models/Unit');


//------------ Patient Handle ------------//
exports.get = (req, res) => {

    User.findOne({ email: req.user.email }).then(user => {

        //------------ Find unit information ------------//
        const unitId = user.unit;
        Unit.find({ _id: unitId }, (err, unit) => {

            if (err) {
                console.log(err);
            } else {
                console.log(unit);
                res.render('patients', {
                    name: user.fname,
                    unit: unit[0].name
                })
            }

        })


    });
}

exports.create = {

    get: (req, res) => {

        res.render('patients/create');

    }
}