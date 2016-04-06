/*
* All enviorments config
*/ 

'use strict';

import secret from '../../secret';


export default  {
  title      : 'Express-es6',
  description: 'Express server with MongoDB',
  keywords   : 'MongoDB, Express, Node.js',
  port       : process.env.PORT || 8000,
  session    : secret,
  db: {
    uri: 'mongodb://127.0.0.1:27017/test',
    opts: {
      server: {
        socketOptions: { keepAlive: 1 }
      }
    }
  }
};
