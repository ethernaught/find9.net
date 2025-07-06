const express = require('express');
const http = require('http');
const fs = require('fs');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const cookies = require('cookie-parser');
require('dotenv').config();
//const middleware = require('./modules/middleware');

const app = express();

//app.set('view engine', 'ejs');
//app.set('views', __dirname+'/views');

app.use(express.static('./public'));

//app.get('/', mainController.getHome);

app.get('*', (req, res) => {
	res.json({
		status: 404,
		status_message: 'Endpoint not found!'
	});
});

const server = http.createServer(app);

server.listen(80, () => {
	console.log(`api.${process.env.DOMAIN} started`);
});
