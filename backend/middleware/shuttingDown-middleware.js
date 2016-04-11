/*
* Application is shutting down
*/

'use strict';


export default function shutDown (app) {
  app.use((req, res, next) => {
    if (app.get('shuttingDown')) {
      return;
    }
    next();
  });
}
