/*
* User controller
*/

'use strict';

import User from '../models/users-model-v01';


const userClened = (user) => {
  return Object.assign({}, {
    email: user.email,
    _id: user.id,
    lastLogin: user.lastLogin,
    roles: user.roles,
    username: user.username
  });
};


export default {

  findAll (req, res) {

    // check header or url parameters or post parameters for token
    User.find({}, (err, users) => {
      if (err) {
        return res.status(400).json({
          message: 'Error retriving user'
        });
      }

      if (users != null) {
        const userList = users.map(user => userClened(user));

        return res.json({
          success: true,
          message: 'Users found',
          result: userList
        });

      } else {
        return res.status(404).json({
          sucess: false,
          message: 'No users were found'
        });
      }
    });
  },


  find (req, res) {
    const id = req.params.user;

    User.findById(id, (err, user) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Error retriving user'
        });
      }

      if (user != null) {
        return res.json({
          success: true,
          message: 'User found',
          result: userClened(user)
        });

      } else {
        return res.status(404).json({
          success: false,
          message: 'User cannot be found'
        });
      }
    });
  },


  update (req, res) {
    const data = req.body;
    const id = req.body.id;

    User.update(id, data, (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Error updating user'
        });
      }

      if (result.nModified === 1) {
        return res.json({
          success: true,
          message: 'User updated'
        });
      } else {
        return res.status(404).json({
          success: false,
          message: 'User was not updatied'
        });
      }
    });
  },


  remove (req, res) {
    var id = req.params.user;

    User.remove(id, (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Error removing user'
        });
      }

      if (result.result.n === 1) {
        return res.status(404).json({
          success: false,
          message: 'User was not removed'
        });
      } else {
        return res.json({
          success: true,
          message: 'User removed'
        });
      }

    });
  }

};
