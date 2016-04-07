/*
* Password encryption helper mrthod
*/

'use strict';


import bcrypt from 'bcrypt-nodejs';


export function generateHash (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

export function validPassword (user, password) {
  return bcrypt.compareSync(password, user.password);
};
