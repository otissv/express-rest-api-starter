/*
* User controller
*/

'use strict';

import User from '../models/user-model-v01';
import { deleteToken } from '../../../helpers/token-helper';

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
    User.find({}, (err, user) => {
      if (err) {
        return res.status(400).json({
          message: 'Error retriving user'
        });
      }

      if (user != null) {
        const userList = user.map(user => userClened(user));

        return res.json({
          success: true,
          message: 'Users found',
          result: userList
        });

      } else {
        return res.status(404).json({
          sucess: false,
          message: 'No user were found'
        });
      }
    });
  },

  find (req, res) {
    const userId = req.params.user;

    User.findById(userId, (err, user) => {
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
    const _id = req.params.user;

    User.update({ _id }, data, (err, result) => {
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
          message: 'User was not updated'
        });
      }
    });
  },


  remove (req, res) {
    var _id = req.query.user;

    if (!_id) {
      return res.status(404).json({
        success: false,
        message: 'A user must be provided'
      });
    }

    deleteToken(_id);

    User.remove({_id: _id}, (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Error removing user'
        });
      }

      if (result.result.n === 1) {
        return res.json({
          success: true,
          message: 'User removed'
        });
      } else {
        return res.status(404).json({
          success: false,
          message: 'User was not removed'
        });
      }

    });
  }

};
