'use strict';

import databases from './databases';
import env from './env/env';
import middleware from './middleware/index-middleware';
import routes from './routes';

export default function (app, express) {
  env(app);
  databases({
    mongodb: app.locals.mongodb,
    redis: app.locals.redis
  });
  middleware(app, express);
  routes(app);
};
