const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const { user } = require('../../models');
const config = require('config')['passport'];
const colors = require('colors');

passport.serializeUser((profile, done) => {
  done(null, profile.id);
});

passport.deserializeUser((id, done) => {
  // find user by id
  user.findById(id)
    .then(result => done(null, result.dataValues))
    .catch(err => {
      console.log('deserializeUser error: '.red, err);
      done(null, false);
    });
});

passport.use('facebook', new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL,
  profileFields: ['id', 'name', 'email', 'picture']
}, (accessToken, refreshToken, profile, done) => {
  // find or create user
  console.log('facebook oauth profile: '.blue, profile);
  console.log('email: ', profile.emails[0].value);
  console.log('photo: ', profile.photos[0].value);

  user
    .findOrCreate({
      where: { facebook_id: profile.id }, // logic is incorrect
      defaults: {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        facebook_id: profile.id,
        facebook_profile_image: profile.photos[0].value
      }
    })
    .spread(async (result, created) => {
      console.log();
      if (!created && !result.dataValues.facebook_id) {
        await result.update({ facebook_id: profile.id });
      }
      done(null, result.dataValues);
    })
    .catch(err => {
      console.log('facebook oauth error: '.red, err);
      done(null, false);
    });
}));

module.exports = passport;