const Authentication = require('../controllers/authentication');
const passportConfig = require('../services/passport');
const passport = require('passport');
const express = require('express');
const apiRouter = express.Router();
const requireSignin = passport.authenticate('local', {session:false});
const requireAuth = passport.authenticate('bearer', {session: false});

apiRouter.post('/login', requireSignin, Authentication.login);
apiRouter.post('/register', Authentication.register);
apiRouter.post('/refresh', requireAuth, Authentication.login);

module.exports = apiRouter;