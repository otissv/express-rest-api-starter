/*
* Tokens Controller
*/

'use strict';


import jwt from 'jsonwebtoken';
import { instance } from '../databases/redis';

const redis = instance;


export function generateToken (user, secret) {

	// Generate json web token
  const token = jwt.sign(user, secret);

  // Save to redis
  redis().hset('tokens', user._id.toString(), token);

  return token;
};


export function	validToken (id, token) {
  const client = redis.instance();
};
