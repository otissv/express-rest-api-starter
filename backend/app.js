'use strict';

import express from 'express';
import { mongoClient } from '../backend/databases/database';
import env from '../backend/env/env';
import logger from '../backend/middleware/logger-middleware';
import body from '../backend/middleware/body-middleware';
import staticFiles from'../backend/middleware/staticFiles-middleware';
import session from '../backend/middleware/session-middleware';
// import { security } from '../backend/middleware/security-middleware';
import routes from './routes';

const app = express();

env(app);
mongoClient.connection({ uri: app.locals.db.uri, opts: app.locals.db.opts });
logger(app);
body(app);
staticFiles(app, express);
session(app, mongoClient.instance());
// security(app);
routes(app);

export default app;
