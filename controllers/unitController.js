//------------ Unit Model ------------//
const Unit = require('../models/Unit');


//------------ FIND ALL Handle ------------//
exports.findAll = (req, res) => {
   
    Unit.find({}, (err, units) => {
        console.log(units);
        res.send(units);

    });
};