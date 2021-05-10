//------------ Model ------------//
const Unit = require('../models/Unit');
const Patient = require('../models/Patient');
const {isoToStandard} = require('../controllers/utils/date')

let errors = [];

//------------ Patient Handle ------------//
exports.get = (req, res) => {

    //------------ Find unit information ------------//
    Unit.find({ _id: req.user.unit }, (err, unit) => {

        if (err) {
            console.log(err);
        } else {

            Patient.find({ unit: req.user.unit }, (err, patients) => {

                console.log(patients)
                res.render('patients', {
                    name: req.user.fname,
                    unit: unit[0].name,
                    patients: patients
                })

            })

        }

    })


}

exports.create = {

    get: (req, res) => {

        Unit.find({}, (err, unit) => {

            if (err) {
                console.log(err);
            } else {

                res.render('patients/create', {
                    name: req.user.fname,
                    units: unit
                })
            }

        })

    },
    post: (req, res) => {

        let patientBody = req.body;
        patientBody["isActive"] = true;
        console.log(patientBody)

        const newPatient = new Patient(patientBody);

        newPatient
            .save()
            .then(patient => {
                console.log(patient);
                req.flash(
                    'success_msg',
                    'Patient Added'
                );
                res.redirect('/patients');
            })
            .catch(err => console.log(err));

    }
}

//------------ Update By ID Handle ------------//

exports.updateById = (req, res) => {

    //------------ Find unit information ------------//
    Unit.find({ _id: req.user.unit }, (err, unit) => {

        if (err) {
            console.log(err);
        } else {

            Patient.updateOne({ _id: req.params.id }, { $set: req.body }, (err, patient) => {

                if (err) {
                    console.log(err);
                } else {
                    req.flash(
                        'success_msg',
                        'Patient Updated'
                    );
                    res.redirect('/patients');
        
                }
            });

        }

    })


}

//------------ Delete By ID Handle ------------//

exports.deleteById = (req, res) => {

    //------------ Find unit information ------------//
    Unit.find({ _id: req.user.unit }, (err, unit) => {

        if (err) {
            console.log(err);
        } else {

            Patient.deleteOne({ _id: req.params.id }, (err, patient) => {

                if (err) {
                    console.log(err);
                } else {
                    req.flash(
                        'success_msg',
                        'Patient Deleted'
                    );
                    res.redirect('/patients');
        
                }
            });

        }

    })


}