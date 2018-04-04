// authentication.js
const jwt = require("jwt-simple");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

exports.tokenForUser = function(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.jwtSecret);
}

exports.localSignin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user)});
}

exports.localSignup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: "You must provide email and password" });
  }

  const existingUser = await User.findOne({ email })
  // if a user with email does exist, return error
  if (existingUser) {
    return res.status(422).send({ error: "Email is in use" });
  }

  const user = new User({ email, password });
  await user.save();
  res.send({ token: tokenForUser(user) });
}
