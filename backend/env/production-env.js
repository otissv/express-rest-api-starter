/*
* Production enviorment*/

'use strict';

import all from './all-env.js';


export default {
  port   : all.port,
  baseURL: 'http://www.yourwebsite.com',
  title  : all.title,
  db     : {
    uri  : 'path/to/database/location',
    opts : all.db.opts
  },
  session: all.session
};

