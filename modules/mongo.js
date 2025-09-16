const { MongoClient } = require('mongodb');

let uri, client, db, isWritable = false;

exports.connectDatabase = async () => {\
	uri = 'mongodb://'+((process.env.DB_USER && process.env.DB_PWD) ? process.env.DB_USER+':'+encodeURIComponent(process.env.DB_PWD)+'@' : '')+
		process.env.DB_HOST.split(',').join(`:${process.env.DB_PORT},`)+`:${process.env.DB_PORT}`+
		'/'+process.env.DB_NAME;

	client = new MongoClient(uri, {
		replicaSet: process.env.DB_REPLICA,
		readPreference: 'secondaryPreferred',
		directConnection: false,
		serverSelectionTimeoutMS: 30000,
		retryReads: true,
		retryWrites: false
	});
	//client = new MongoClient(uri, {
	//	readPreference: 'secondaryPreferred'
	//});
	
	client.connect();
	db = client.db();

	try{
		const info = await db.admin().command({ isMaster: 1 });
		isWritable = info.ismaster || info.isWritablePrimary;

		if(isWritable){
			await db.collection('users').createIndex({
				email: 1
			},
			{
				unique: true
			});
		}

	}catch(e){
		console.warn('[MongoDB] Could not determine writable state:', e.message);
	}
};

exports.getURI = () => {
	return uri;
}

exports.getClient = () => {
	return client;
};

exports.getDatabase = () => {
	return db;
};

exports.isWritable = () => isWritable;
