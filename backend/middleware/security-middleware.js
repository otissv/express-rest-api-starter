/*
* Appplication secruity
*/

'use strict';

import helmet from 'helmet';
import cors from 'cors';


export default function security (app) {

  app.disable('x-powered-by');

  // CORS
  const whitelist = app.locals.cors.whitelist;
  const corsOptions = {
    origin: function (origin, callback) {
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
    }
  };

  app.use(cors(corsOptions));

  // pre-flight
  app.options('*', cors(corsOptions));


  // Content Security Policy
  if (app.get('env' !== 'development')) {
    app.use(helmet.csp({
      defaultSrc: ['self'],
      scriptSrc: ['*.google-analytics.com'],
      styleSrc: ['unsafe-inline'],
      imgSrc: ['*.google-analytics.com'],
      connectSrc: ['none'],
      fontSrc: [],
      objectSrc: [],
      mediaSrc: [],
      frameSrc: []
    }));
  }


  app.use(helmet.xssFilter());
  app.use(helmet.xframe());
  app.use(helmet.hsts({
    maxAge: 7776000000,
    includeSubdomains: true
  }));
  app.use(helmet.noSniff());
  app.use(helmet.ieNoOpen());
  // app.use(require('express-enforces-ssl'));
};
