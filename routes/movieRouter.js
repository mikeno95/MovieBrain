// movieRouter.js
const request = require("request");
const passport = require("passport");
const keys = require("../config/keys");

const requireAuth = passport.authenticate("jwt", { session: false });

const ROOT_URL = "https://api.themoviedb.org/3";
module.exports = app => {
  app.get("/api/movies", requireAuth, (req, res) => {
    request(`${ROOT_URL}/search/movie?api_key=${keys.movieDBKey}&query=${req.body.searchTerm}`, (err, response, body) => {
      if (!error && response.statusCode == 200) {
        res.send(body.data); 
      }
    })
  });
}
