"use strict";

// Load the module dependencies
var config = require('./config'),
	mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	var db = mongoose.connect(config.db);

	// Load the 'User' and 'Article' models
	require('../app/models/user.server.model');
	require('../app/models/article.server.model');

	// Return the Mongoose connection instance
	return db;
};