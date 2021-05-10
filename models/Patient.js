const mongoose = require('mongoose');

//------------ Patient Schema ------------//
const PatientSchema = new mongoose.Schema({
  mrn: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  nextOfKin: {
    type: String,
    required: true
  },
  isActive: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Patient = mongoose.model('Patients', PatientSchema);

module.exports = Patient;