/*
* Development enviorments config
*/

'use strict';

import all from './all-env.js';


export default {
  port   : all.port,
  baseURL: 'http://localhost:' + all.port,
  title  : all.title + ' Dev',
  db     : all.db,
  session: all.session
};
