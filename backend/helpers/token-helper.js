/*
* Tokens Controller
*/

'use strict';

import jwt from 'jsonwebtoken';
import secret from '../../secret';
import { instance } from '../databases/redis';

const redis = instance;


export function generateToken (user) {

	// Generate json web token
  const token = jwt.sign(user, secret);

  // Save to token
  if (user._id) {
    redis().hset('tokens', user._id.toString(), token);
  }
  return token;
};


export function	getToken (_id, cb) {

  // Get token
  if (!_id) {
    cb && cb();
  } else {
    redis().hget('tokens', _id.toString(), (err, token) => {
      if (err) {
        cb && cb(err);
      } else {
        cb && cb(token);
      }
    });
  }
};


export function validateToken (_id, token, cb) {

  function x (hasToken) {
    if (hasToken) {
      // if token is valid call callback with token
      cb && cb(token);
    } else {
      // if token is valid call callback with undefined
      cb && cb();
    }
  }

  getToken(_id, x);
};


export function deleteToken (_id, cb) {
  if (!_id) {
    cb && cb(true);
  } else {

    redis().del('tokens', _id.toString(), (err, reply) => {
      if (err) {
        cb && cb(err);
      }

      cb && cb(null, reply);
    });
  }
}
