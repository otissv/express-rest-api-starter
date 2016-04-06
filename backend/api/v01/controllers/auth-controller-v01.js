/*
* User contoller
*/


'use strict';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';
import User from '../models/users-model-v01';
import secret from '../../../../secret';


export default {
  authenticate (req, res) {
    User.findOne({
      username: req.body.username
    }, function(err, user) {
      console.log(req.body.username)
      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      
      } else if (user) {

        // check if password matches
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.json({ success: false, message: 'Authentication failed. Either the username or password was incorrect.' });
        } else {

          //if user is found and password is right create a token
          var token = jwt.sign(user, secret);

          // return the information including token as JSON
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

    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, secret, function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' }); 

        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;    
          next();
        }
      });

    } else {

      // if there is no token return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
    }
  }
}