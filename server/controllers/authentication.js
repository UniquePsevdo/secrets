const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user){
	const timestamp = new Date().getTime();
	return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signup = function(req, res, next){
	const email = req.body.email;
	const password = req.body.password;
	
	//see if a user with a given name exist
	User.findOne({email:email}, function(err, existingUser){
		if(err){
			return next(err);
		}
		
		if(!email || !password){
			return res.status(422).send({error: 'You must provide email and password'});
		}
		
		//if a user exist return error
		if(existingUser){
			return res.status(422).send({error: 'Email is in use'});
		}
		
		//if user does not exist - create
		const user = new User({
			email: email,
			password: password
		})
		
		user.save(function(err){
			if(err){
				return next(err);
			}
			res.json({token: tokenForUser(user)});
		});
	});
	//respond user was created
}

exports.signin = function(req, res, next){
	console.log('111111111111111111111111111111');
	//give a token to user
	res.json({token: tokenForUser(req.user)});
}