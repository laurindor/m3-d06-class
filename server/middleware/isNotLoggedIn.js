function isNotLoggedIn(req, res, next) {
	if (req.session.currentUser) {
	
		next();
	}	 else {	
		res.json(message'you are locked out')
}

module.exports = isNotLoggedIn
