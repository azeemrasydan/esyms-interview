const mongoose = require('mongoose');

//------------ User Schema ------------//
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
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