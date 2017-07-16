const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./routes/index');
const apiRouter = require('./routes/apiRouter');
const mongoose = require ('mongoose');
const cors = require ('cors');
const {notFound, developmentErrors, productionErrors} = require('./handlers/errorHandlers');

//db setup
mongoose.connect('mongodb://VolodymyrSydorov:My_1ntent10ns@ds143191.mlab.com:43191/the_secrets');

//app setup
app.use(morgan('combined'));

/*app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');*/

var whitelist = ['http://localhost:4200'];
var corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}
app.use(cors(corsOptions));
app.use(bodyParser.json({type: '*/*'}));

/*app.use('/api/', apiRouter);
router(app);*/

app.use('/api/', apiRouter);
app.use('/', router);

app.use(notFound);
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
	app.use(developmentErrors);
}else{
	app.use(productionErrors);
}

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server is listening on port: ' + port);