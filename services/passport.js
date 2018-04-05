// passport.js
const passport = require("passport");
const keys = require("../config/keys");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth20");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Auth = require("../controllers/authentication");

// Local Strategy
const localOptions = { usernameField: "email" };
passport.use(
  new LocalStrategy(localOptions, async (email, password,done) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const isMatch = await existingUser.comparePassword(password);
      if (isMatch) {
        return done(null, existingUser);
      }
    }
    return done(null, false);
  })
);

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", // route user is redirected to after granted permission from Google
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({googleId: profile.id});
      if(existingUser) {
        await Auth.tokenForUser(existingUser);
        return done(null, existingUser);
      }
      const user = await new User({
        googleId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value
      }).save();

      await Auth.tokenForUser(user);
      return done(null, user);
    }
  )
);

// JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: keys.jwtSecret
};

passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
  const existingUser = await User.findById(payload.sub);
  if(existingUser) {
    return done(null, existingUser);
  }
  return done(null, false);
}));
