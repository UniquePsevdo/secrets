const passport = require('passport');
const express = require('express');
const router = express.Router();
const requireAuth = passport.authenticate('jwt', {session: false});
router.get('/admin', requireAuth, function (req, res) {
	res.send({hi: 'there'});
});

module.exports = router;