//------------ Model ------------//
const Unit = require('../models/Unit');
const Patient = require('../models/Patient');
const { isoToStandard } = require('../controllers/utils/date');
const Address = require('../models/Address');

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

                    if(req.user.group == 1){
                        res.redirect('/patients');
                    } else {
                        res.redirect('/patients/profile');
                    }
                    

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


//------------ Create Address Handle ------------//
exports.createAddress = {

    get: (req, res) => {

        Patient.findById({ _id: req.params.id })
            .populate({ path: 'address', model: Address })
            .then(patients => {
                console.log(patients);
                res.render('patients/addresses/create', {
                    patient: patients
                })

            })



    },
    post: (req, res) => {

        var address = new Address(req.body);
        address.save((err, address) => {

            if (err) {
                console.log(err);
            } else {
                Patient.findById(req.params.id, (err, patient) => {
                    if (err) {
                        console.log(err);
                    } else {
                        patient.address.push(address);
                        patient.save((err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                res.redirect('/patients/addresses/create/' + req.params.id)
                            }
                        })
                    }
                })
            }

        })

    }
}

//------------ Address Handle ------------//
exports.address = {

    delete: (req, res) => {

        const { patientId } = req.body

        Patient.updateOne(
            { _id: patientId },
            { $pull: { address: req.params.id } },
            (err) => {
                if (err) {
                    console.log(err);

                } else {
                    res.redirect('/patients/addresses/create/' + patientId);
                }


            }
        )

    }
}

//------------ Create Next Of Kin Handle ------------//
exports.createNextOfKin = {

    get: (req, res) => {

        Patient.findById({ _id: req.params.id })
            .then(patients => {
                console.log(patients);
                res.render('patients/nextofkin/create', {
                    patient: patients
                })

            })



    },
    post: (req, res) => {


        Patient.findById(req.params.id, (err, patient) => {
            if (err) {
                console.log(err);
            } else {
                patient.nextOfKin.push(req.body);
                patient.save((err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.redirect('/patients/nextofkin/create/' + req.params.id)
                    }
                })
            }
        })
    }



}

//------------ Next Of Kin Delete Handle ------------//
exports.nextOfKin = {

    delete: (req, res) => {

        const { patientId } = req.body

        Patient.updateOne(
            { _id: patientId },
            { $pull: { nextOfKin: { _id: req.params.id } } },
            (err) => {
                if (err) {
                    console.log(err);

                } else {
                    res.redirect('/patients/nextofkin/create/' + patientId);
                }


            }
        )

    }
}

//------------ Profile Handle ------------//
exports.profile = {

    get: (req, res) => {

        Patient.findOne({ email: req.user.email })
            .then(patients => {
                console.log(patients);
                res.render('patients/profile', {
                    patient: patients
                })

            })



    },
    post: (req, res) => {


        Patient.findById(req.params.id, (err, patient) => {
            if (err) {
                console.log(err);
            } else {
                patient.nextOfKin.push(req.body);
                patient.save((err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.redirect('/patients/nextofkin/create/' + req.params.id)
                    }
                })
            }
        })
    }



}