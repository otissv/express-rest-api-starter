/*
* Application enviorments config
*/ 

'use strict';

import development from './development-env.js';
import production from './production-env.js';


export default function env (app) {
  var config;

  switch (app.get('env')) {
    case 'development':
      config = development;
      break;
    case 'production':
      config = production;
      break;
    default:
      throw new Error('Unknow exection Enviorment:');
  }


  /*
  *Application variables
  */
  app.set('baseURL', config.baseURL);
  app.locals = Object.assign({}, app.locals, config);
};