const mongoose = require('mongoose');

//------------ Unit Schema ------------//
const UnitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Unit = mongoose.model('Units', UnitSchema);


module.exports = Unit;