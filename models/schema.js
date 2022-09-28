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
    type: String,
    required: true,
   },
  date: {
    type: String,
    required: true,
  },
  amenity: {
    type: String,
    required: true,
  }
}, { timestamps: true});

const data = mongoose.model('data', db_input);
module.exports = data;