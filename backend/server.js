#!/usr/bin/env node

/*
* Application Sever
*/

'use strict';

import express from 'express';
import main from './main.js';

const app = express();
main(app, express);

app.set('port', process.env.PORT || app.locals.port);

const server = app.listen(app.get('port'), () => {
  console.log('Express server started in ' + app.get('env') + ' mode on http://localhost:' + server.address().port);
});
