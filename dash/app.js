const express = require('express');
const http = require('http');
const fs = require('fs');
const useragent = require('express-useragent');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const cookies = require('cookie-parser');
const crypto = require('crypto');
const MongoStore = require('connect-mongo');
global.mongo = require('./modules/mongo');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.static('./public'));

//global.mongo.connectDatabase();
/*
app.use(session({
	secret: process.env.TOKEN_SESSION,
	resave: false,
	saveUninitialized: true,
	store: MongoStore.create({
		client: global.mongo.getClient(),
		dbName: process.env.DB_DATABASE,
		collectionName: 'sessions',
		ttl: 14*24*60*60*1000
	}),
	cookie: {
		domain: '.'+process.env.DOMAIN,
		secure: false,
		maxAge: 24*60*60*1000
	}
}));
*/
app.use(cookies());

app.use((req, res, next) => {
    const nonce = crypto.randomBytes(16).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    //res.setHeader('Content-Security-Policy', `default-src 'self' *.${process.env.DOMAIN}; style-src 'self' 'nonce-${nonce}'`);

    res.locals.nonce = nonce;
    next();
});

app.use(useragent.express());

//app.use('/fragments', require('./routers/fragments').getRouter());

app.use('/domain/:domain', require('./routers/domain').getRouter());
app.use('/profile', require('./routers/profile').getRouter());
app.use('/', require('./routers').getRouter());

app.get('*', (req, res) => {
	res.json({
		status: 404
	});
	//mainController.getError(req, res, 404);
});

const server = http.createServer(app);

server.listen(80, () => {
	console.log(`dash.${process.env.DOMAIN} started`);
});
