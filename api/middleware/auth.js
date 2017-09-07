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

module.exports.isAuthorized = async (req, res, next) => {
  // let isAuthorized = false;
  
  // // ensure user is admin of the store
  // if (req.isAuthenticated() && req.user) {
  //   let loggedInUser = await Admin.findById(req.user.id);
  //   isAuthorized = !!loggedInUser && user.storeId === req.body.id;
  // }
  
  // if (!req.isAuthenticated() || !isAuthorized) {
  //   return res.sendStatus(401); 
  // }
  next();
};

module.exports.signout = (req, res) => {
  req.logout();
  res.redirect('/');
};