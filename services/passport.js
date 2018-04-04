// passport.js
const passport = require("passport");
const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID, // set clientID
      clientSecret: keys.googleClientSecret, // set ClientSecret
      callbackURL: "/auth/google/callback", // route user is redirected to after granted permission from Google
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // add 
    }
  )
);
