const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const db_input = new Schema({
  username:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  time: {
    type: String
   },
  date: {
    type: String
  },
  amenity: {
    type: String
  },
  booking_id: {
    type: String
  }
}, { timestamps: true});

const data = mongoose.model('data', db_input);
module.exports = data;