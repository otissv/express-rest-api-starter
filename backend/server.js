#!/usr/bin/env node

/*
* Application Sever
*/

'use strict';

import app from './app.js';

app.set('port', process.env.PORT || app.locals.port);

const server = app.listen(app.get('port'), () => {
  console.log('Express server started in ' + app.get('env') + ' mode on http://localhost:' + server.address().port);
});
