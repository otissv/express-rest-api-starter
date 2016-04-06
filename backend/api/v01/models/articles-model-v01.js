/*
* Articles model
*/

'use strict';

import mongoose from 'mongoose';

const Comments = new mongoose.Schema({
  comment   : String,
  commenter : String,
  created   : Date,
  upvotes   : Number
});


const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: ' please complete title'
  },
  body: {
    type: String,
    required: 'Article is empty'
  },
  comments  :[Comments],
  userId    : String,
  tags      : [String],
  categories: [String],
  upvotes   : Number,
  lastLogin : Date,
  created   : Date,
  published : Date,
  status: {
    type: [{
      type: String,
      enum: ['draft', 'published']
    }],
    default: ['draft']
  },
  updated   : {
    type: Date,
    default: Date.now
  }
});


export default mongoose.model('Article', articleSchema);
