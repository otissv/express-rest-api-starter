/*
* Database connections
*/

'use strict';

import * as mongodb from './mongodb';
import * as redis from './redis';


export default function databases (locals) {
  locals.mongodb && mongodb.connection(locals.mongodb);

  locals.redis && redis.connection(locals.redis);
};
