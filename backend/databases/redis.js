/*
* redis connection
*/

'use strict';

import redis from 'redis';

let client;

export default {
  connection: (opts) => {

    // Create the database connection
    client = redis.createClient(opts.port, opts.host);

    // Event handlers
    client.on('connect', () => {
      console.log(`Redis connected to ${opts.uri}:${opts.port}`);
    });

  },

  instance: () => {
    return client;
  }
}