const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const next = require('next');
const middleware = require('./middleware');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;
const db = require('../models');

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(middleware.auth.session);
    server.use(middleware.passport.initialize());
    server.use(middleware.passport.session());

<<<<<<< 0b6c14f76c44ebeecccd22825b7d7328b0367642
    // pages endpoint
    server.get('/', (req, res) => app.render(req, res, '/', req.query));
    server.get('/signin', (req, res) =>
      app.render(req, res, '/signin', req.query)
    );

    // data endpoint
    server.use('/auth', routes.auth);
=======
    server.get('/', (req, res) => app.render(req, res, '/', req.query));
>>>>>>> rebasing
    server.get('*', handle);

    server.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch(err => console.log(err));