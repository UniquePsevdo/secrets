const express = require('express');
const passportConfig = require('../services/passport');
const passport = require('passport');
const router = express.Router();

router.get('/admin', function (req, res) {
	res.send({hi: 'there'});
});

module.exports = router;