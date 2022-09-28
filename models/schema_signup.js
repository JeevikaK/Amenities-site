const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signup_input = new Schema({
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
       },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
     },
    password: {
      type: String,
      required: true,
    },
    confirm_password: {
      type: String,
      required: true,
      }
}, {timestamps: true})

const signup = mongoose.model('signup', signup_input)
module.exports = signup

