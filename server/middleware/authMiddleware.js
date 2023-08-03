const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/userModel');

passport.use(
  new LocalStrategy(
    { usernameField: 'userName', passwordField: 'password' },
    async (userName, password, done) => {
      try {
        console.log('I am in localstrtegy')
        console.log(userName, ' and ', password)
        const user = await User.findUserByUserName(userName);
        if (!user) {
          console.log('incoprrect user')
          return done(null, false, { message: 'Incorrect user name.' });
        }

        const isMatch = await bcrypt.compare(password, user.hash);
        if (!isMatch) {
          console.log('wrong password')
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user.userName);
});

passport.deserializeUser(async (userName, cb) => {
  try {
    const user = await User.findUserByUsername(userName);
    cb(null, user);
  } catch (err) {
    cb(err);
  }
});

module.exports = passport;
