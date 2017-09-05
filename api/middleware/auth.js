const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const config = require('config')['redis'];

const client = redis.createClient(6379, config.host);

module.exports.session = session({
  store: new RedisStore({ client }),
  secret: 'no-line',
  resave: false,
  rolling: true,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 1000 * 15 }
});

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
};

module.exports.signout = (req, res, next) => {
  req.logout();
  next();
};