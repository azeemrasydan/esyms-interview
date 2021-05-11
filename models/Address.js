const mongoose = require('mongoose');

//------------ Address Schema ------------//
const AddressSchema = new mongoose.Schema({
    one: {
        type: String,
        required: true
    },
    two: {
        type: String
    },
    postcode: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
  }

}, { timestamps: false });

const Address = mongoose.model('Addresses', AddressSchema);


module.exports = Address;