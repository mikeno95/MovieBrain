// movieRouter.js
const passport = require("passport");
const search = require("../controllers/search");

const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = app => {
  app.post("/api/movies", search.fetchMax50, search.compileList);
}
