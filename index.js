// server - index.js
const express = require("express");
const app = express();
// const cookieSession = require("cookie-session");
// const passport = require("passport");
const bp = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const keys = require("./config/keys");

// DB setup
require("./config/mongoose");

// App Setup
app.use(morgan("combined"));
app.use(bp.json({ type: "*/*" }));
app.use(cors());
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000, // setting cookie to last: 30 days, 24 hours, 60 min, 60 sec, 1000 ms
//     keys: [keys.cookieKey]
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
require("./services/passport");
require("./routes/authRouter")(app);

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log(`Listening to port ${PORT}`);
});
