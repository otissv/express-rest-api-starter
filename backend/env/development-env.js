/*
* Development enviorments config
*/

'use strict';

import all from './all-env.js';


export default {
  port   : all.port,
  baseURL: 'http://localhost:' + all.port,
  title  : all.title + ' Dev',
  cors   : {
    whitelist: ['http://localhost:9000']
  },
  mongodb: {
    uri: 'mongodb://127.0.0.1:27017/test',
    opts: {
      server: {
        socketOptions: { keepAlive: 1 }
      }
    }
  },
  redis: {
    host: '127.0.0.1',
    port: 6379
  },
  session: all.session
};
