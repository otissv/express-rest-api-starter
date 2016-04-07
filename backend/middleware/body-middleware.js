/*
* Body parser
* Should be placed before express.static
*/

'use strict';


import bodyParser from 'body-parser';
import methodOverride from 'method-override';


export default function body (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(methodOverride());
};
