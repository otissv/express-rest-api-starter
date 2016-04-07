/*
* MongoDB connection
*/

'use strict';

import mongoose from 'mongoose';


export default {
  connection: (options) => {
    // Create the database connection
    mongoose.connect(options.uri, options.opts);

    // Event handlers
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to ' + options.uri);
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
  },

  instance: () => {
    return mongoose;
  }
}