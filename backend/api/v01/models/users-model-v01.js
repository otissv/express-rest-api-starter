/*
*
 User model
*/
'use strict';

import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  firstName  : String,
  lastName   : String,
  username: {
    type    : String,
    unique  : true,
    required: 'Please fill in username',
    trim: true
  },
  email: {
    type: String
    // unique:true,
    // required: 'Please fill in your email'
    // match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  password: {
    type    : String,
    required: 'Please fill in password'
  },
  roles: {
    type: [{
      type: String,
      enum: ['user', 'admin']
    }],
    default: ['user']
  },
  lastLogin: { type: Date },
  created  : { type: Date },
  updated  : { type: Date, default: Date.now }
});


export default mongoose.model('User', userSchema);
