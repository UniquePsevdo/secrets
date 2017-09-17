const Authentication = require('../controllers/authentication');
const passportConfig = require('../services/passport');
const passport = require('passport');
const express = require('express');
const apiRouter = express.Router();
const requireSignin = passport.authenticate('local', {session:false});
const requireAuth = passport.authenticate('bearer', {session: false});

const I18n = require('../controllers/i18n');

apiRouter.post('/login', requireSignin, Authentication.login);
apiRouter.post('/register', Authentication.register);
apiRouter.post('/refresh', requireAuth, Authentication.login);
apiRouter.get('/locales', I18n.getLocales);
apiRouter.get('/translations', I18n.sendTranslations);

module.exports = apiRouter;