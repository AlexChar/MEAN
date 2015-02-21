// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'render' controller method
exports.render = function(req, res) {
	// Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
	res.render('index', {
		title: 'MEAN',
		userFullName: req.user ? req.user.fullName : ''
	});
};