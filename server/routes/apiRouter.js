const Authentication = require('../controllers/authentication');
const passportConfig = require('../services/passport');
const passport = require('passport');
const express = require('express');
const apiRouter = express.Router();
const requireSignin = passport.authenticate('local', {session:false});
const requireAuth = passport.authenticate('bearer', {session: false});

apiRouter.post('/login', requireSignin, Authentication.signin);
apiRouter.post('/register', Authentication.signup);
apiRouter.post('/refresh', requireAuth, Authentication.signin);
apiRouter.get('/test', requireAuth, Authentication.testGet);

module.exports = apiRouter;