const Authentication = require('../controllers/authentication');
//const passportService = require('../services/passport');
const passport = require('passport');
const express = require('express');
const apiRouter = express.Router();
const requireSignin = passport.authenticate('local', {session:false});

apiRouter.post('/signin', requireSignin, Authentication.signin);
apiRouter.post('/signup', Authentication.signup);

module.exports = apiRouter;