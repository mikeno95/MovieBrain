// router.js
const passport = require("passport");
const auth = require("../controllers/authentication");

const googleOAuth = passport.authenticate("google", {scope: ["profile", "email"]});
const googleSignup = passport.authenticate("google", { session: false });
const facebookOAuth = passport.authenticate("facebook", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = app => {
  // Google OAuth
  app.get("/auth/google", googleOAuth);
  app.get("/auth/google/callback", googleSignup, auth.tokenSignin);

  // Local
  app.get("/auth/signup", auth.localSignup);
  app.get("/auth/signin", requireSignin, auth.tokenSignin);

  // User Data
  app.get("/api/current_user", requireAuth, (req, res) => {
    res.send(req.user);
  });
};
