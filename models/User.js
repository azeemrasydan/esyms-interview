const mongoose = require('mongoose');

//------------ User Schema ------------//
const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  }
  ,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  unit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'units'
  },
  group: {
    type: Number
  }
  ,
  verified: {
    type: Boolean,
    default: false
  },
  resetLink: {
    type: String,
    default: ''
  }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;