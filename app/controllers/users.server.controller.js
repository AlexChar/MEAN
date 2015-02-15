"use strict";

// Load the 'User' Mongoose model
var User = require('mongoose').model('User');

// Create a new 'create' controller method
exports.create = function(req, res, next) {
	// Create a new instance of the 'User' Mongoose model
	var user = new User(req.body);

	// Use the 'User' instance's 'save' method to save a new user document
	user.save(function(err) {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Use the 'response' object to send a JSON response
			res.json(user);
		}
	});
};