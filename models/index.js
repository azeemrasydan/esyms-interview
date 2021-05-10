const Unit = require('./Unit');


module.exports = (req, res , next) => {

    // //------------ Initialize Unit Defaults Documents ------------//
    // var units = [
    //     { name: "A" },
    //     { name: "B" },
    //     { name: "C" },
    // ]

    // Unit.collection.insertMany(units, (err, docs) => {

    //     if (err) {
    //         return console.error(err);
    //     } else {
    //         console.log("Multiple documents inserted to Collection")
    //     }

    // })

    // //------------ Initialize Unit Defaults Documents ------------//
    // var units = [
    //     { name: "A" },
    //     { name: "B" },
    //     { name: "C" },
    // ]

    // Unit.collection.insertMany(units, (err, docs) => {

    //     if (err) {
    //         return console.error(err);
    //     } else {
    //         console.log("Multiple documents inserted to Collection")
    //     }

    // })

    next();

};