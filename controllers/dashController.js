//------------ User Model ------------//
const User = require('../models/User');
const Unit = require('../models/Unit');


//------------ Dashboard Handle ------------//
exports.dashHandle = (req, res) => {

    User.findOne({ email: req.user.email }).then(user => {
        if (user.unit) {
            res.render('dash', {
                name: user.name
            })
        } else {

            //------------ Retrieve ALL units from MongoDB and pass the data to render ------------//
            Unit.find({}, (err, units) => {
                res.render('unitCreate', {
                    units: units,
                    user: user
                })

            });


        }
    });
}