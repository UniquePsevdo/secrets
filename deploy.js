const fs = require('fs-extra');
const dir = __dirname + '/deploy';
fs.ensureDir(dir, err => {
	if (err) {
		console.log(err);
	}
	fs.copySync(__dirname + (process.env.NODE_ENV === 'development' ? '/dev-build' : '/prod-build'), __dirname + '/deploy');
	console.log('success');
});
