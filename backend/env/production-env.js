/*
* Production enviorment*/

'use strict';

import all from './all-env.js';


export default {
  port   : all.port,
  baseURL: 'http://www.yourwebsite.com',
  title  : all.title,
  mongodb     : {
    uri  : 'path/to/database/location',
    opts : all.mongodb.opts
  },
  session: all.session
};

