// server - index.js
const express = require("express");
const app = express();
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
require("./services/passport");
require("./routes/authRouter")(app);
require("./routes/movieRouter")(app);

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log(`Listening to port ${PORT}`);
});
