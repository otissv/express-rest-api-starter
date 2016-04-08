/*
* Password encryption helper mrthod
*/

'use strict';

import bcrypt from 'bcrypt-nodejs';


export function generateHash (str) {
  return bcrypt.hashSync(str, bcrypt.genSaltSync(8), null);
};

export function isValidateHash (str, hash) {
  console.log('bcrypt: ', bcrypt.compareSync(str, hash));
  return bcrypt.compareSync(str, hash);
};
