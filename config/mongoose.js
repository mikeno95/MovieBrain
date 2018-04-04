// mongoose.js

// setting up database
const mongoose = require("mongoose");
const keys = require("./keys");
mongoose.connect(keys.mongoURI);

// read all model files in 'models' folder
const path = require('path');
const fs = require('fs');
const mp = path.join(__dirname, '../models');

fs.readdirSync(mp).forEach(function(file){
	if(file.indexOf('.js') >= 0) {
		require(mp + '/' + file);
	}
});
