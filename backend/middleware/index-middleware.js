/*
* Application middleware
 */

'use strcit';

import shuttingDown from '../middleware/shuttingDown-middleware';
import logger from '../middleware/logger-middleware';
import body from '../middleware/body-middleware';
import staticFiles from '../middleware/staticFiles-middleware';
// import session from '../backend/middleware/session-middleware';
import security from '../middleware/security-middleware';


export default function middleware (app, express) {
  shuttingDown(app);
  logger(app);
  body(app);
  staticFiles(app, express);
  // session(app, mongodb.instance());
  security(app);
};
