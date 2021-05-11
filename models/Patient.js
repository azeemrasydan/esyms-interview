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
  address: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'addresses'
  }],
  nextOfKin: [{
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    contactNo: {
      type: String
    },
    email: {
      type: String
    }
  }],
  isActive: {
    type: Boolean,
    required: true
  },
  unit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'units'
  }
}, { timestamps: true });

const Patient = mongoose.model('Patients', PatientSchema);

module.exports = Patient;