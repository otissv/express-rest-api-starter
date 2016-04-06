/*
* Application routes
*/

'use strict';


import routesV01 from './api/v01/routes-v01';


export default function routes (app) {
  const route =  app.route;

  routesV01(app);
}
