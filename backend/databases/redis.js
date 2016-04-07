/*
* redis connection
*/

'use strict';

import redis from 'redis';

let client;

export function connection (options) {

  // Create the database connection
  client = redis.createClient(options.port, options.host);

  // Event handlers
  client.on('connect', () => {
    console.log(`Redis connected to ${options.host}:${options.port}`);
  });

};

export function instance () {

  // Return instance of redis client
  return client;
};
