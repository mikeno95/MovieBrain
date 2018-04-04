// router.js
const passport = require("passport");
require("./services/passport");

const googleAuth = passport.authenticate("google", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  
  app.get("/auth/google/callback", googleAuth);

  app.get("/api/current_user", requireAuth, (req, res) => {
    res.send(req.user);
  });
};
