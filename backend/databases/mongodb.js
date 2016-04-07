/*
* MongoDB connection
*/

'use strict';

import mongoose from 'mongoose';

export function connection (options) {

  // Create the database connection
  const { uri, opts } = options;

  mongoose.connect(uri, opts);

  // Event handlers
  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + uri);
  });
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose disconnected through app termination');
    });
  });
};

export function instance () {

  // return instance of mongodb client
  return mongoose;
};
