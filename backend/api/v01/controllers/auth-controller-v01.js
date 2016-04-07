/*
* User contoller
*/


'use strict';

import jwt from 'jsonwebtoken';
import { generateHash, validPassword } from '../../../helpers/bycrypt-helper';
import User from '../models/users-model-v01';
import secret from '../../../../secret';
import bcrypt from 'bcrypt-nodejs';

export default {
  register (req, res) {
    // create a sample user
    const user = new User({
      username: req.body.username,
      password: generateHash(req.body.password)
    });

    user.save(function (err) {
      if (err) {
        return res.json({ 
          success: false,
          message: err.errmsg
        });
      }

      res.json({ 
        success: true,
        meassage: 'Saved user',
        result: {
          username: user.username,
          roles: user.roles,
          token: jwt.sign(user, secret)
        }
      });
    });
  }, 


  authenticate (req, res) {
    User.findOne({
      username: req.body.username
    }, function(err, user) {

      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      
      } else if (user) {

        // Check if password matches
        if (!validPassword(user, req.body.password)) {
          res.json({ success: false, message: 'Authentication failed. Either the username or password was incorrect.' });
        } else {

          
          let token;

          if (!req.body.token) {
            // If user is found and password is right create a token
            token = jwt.sign(user, secret);
          } else {

            // Check token in store
            token = 'token from store'
          }
          

          // Return the information including token as JSON
          res.json({
            success: true,
            message: 'User has been authenticated!',
            token: token
          });
        }   

      }

    });
  },


  authorised (req, res, next) {

    // Check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // Decode token
    if (token) {

      // Verifies secret and checks exp
      jwt.verify(token, secret, function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' }); 

        } else {
          // If everything is good, save to request for use in other routes
          req.decoded = decoded;    
          next();
        }
      });

    } else {

      // If there is no token return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
    }
  }
}