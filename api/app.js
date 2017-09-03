const app = require('express')();
const next = require('next');
const config = require('config');

const middleware = require('./middleware');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;

nextApp
  .prepare()
  .then(() => {
    app.use(middleware.bodyParser.json());
    app.use(middleware.bodyParser.urlencoded({ extended: true }));

    app.use(middleware.auth.session);
    app.use(middleware.passport.initialize());
    app.use(middleware.passport.session());

    // pages endpoint
    app.get('/', (req, res) => nextApp.render(req, res, '/', req.query));
    app.get('/signin', (req, res) => nextApp.render(req, res, '/signin', req.query));
    app.get('/signout', middleware.auth.signout, (req, res) => nextApp.render(req, res, '/'));

    // data endpoint
    app.use('/auth', routes.auth);
    app.get('*', nextHandler);

    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch(err => console.log(err));