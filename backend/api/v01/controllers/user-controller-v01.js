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
}


export default {

  findAll (req, res) {

    // check header or url parameters or post parameters for token
    User.find({}, (err, users) => {
      if (err) {
        return res.status(400).send({
          message: 'No users were found'
        });
      }

      if (users != null) {
        const userList = users.map(user => userClened(user));

        return res.json(userList);

      } else {
        return res.status(404).send({
          message: 'error'
        });
      }
    });
  },


  find (req, res) {
    const id = req.params.user;

    User.findById(id, (err, user) => {
      if (err) {
        return res.status(400).send({
          message: 'User cannot be found'
        });
      }

      if (user != null) {
        return res.json(userClened(user));

      } else {
        return res.status(404).send({
          message: 'error'
        });
      }
    });
  },


  update (req, res) {
    const data = req.body;
    const id = req.body.id;

    User.update(id, data, (err, result) => {
      if (err) {
        return res.status(400).send({
          message: 'User cannot be found'
        });
      }

      if (result.nModified === 1) {
        return res.send({message: 'success'});
      } else {
        return res.status(404).send({
          message: 'error'
        });
      }
    });
  },


  remove (req, res) {
    var id = req.params.user;

    User.remove( id, (err, result) => {
      if (err) {
        return res.status(400).send({
          message: 'User cannot be found'
        });
      }

      if (result.result.n === 1) {
        return res.status(404).send({
          message: 'error'
        });
      } else {
        return res.send({message: 'success'});
      }

    });
  }

};
