/*
*Application session
*/

'use strict';


import expressSession from 'express-session';
import cookieParser from 'cookie-parser';

const MongoStore = require('connect-mongo')(expressSession);


export default function  session (app, mongoose) {
  app.use(cookieParser());
  app.use(expressSession({
    secret: app.locals.session,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    saveUninitialized: true,
    resave: true
  }));
};

