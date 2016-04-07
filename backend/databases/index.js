/*
* Database connections
*/

'use strict';


import mongodb from './mongodb';
import redis from './redis';

export default function databases (locals) { 


  locals.mongodb && mongodb.connection(locals.mongodb);

  locals.redis && redis.connection(locals.redis);
};