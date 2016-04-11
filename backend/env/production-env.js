/*
* Production enviorment*/

'use strict';

import all from './all-env.js';


export default {
  port   : all.port,
  baseURL: 'http://www.yourwebsite.com',
  title  : all.title,
  cors   : {
    whitelist: ['https://alloweddomain.com']
  },
  mongodb     : {
    uri  : 'path/to/database/location',
    opts: {
      server: {
        socketOptions: { keepAlive: 1 }
      }
    }
  },
  session: all.session
};
