import mongoose from 'mongoose';
import config from '../config/configuration';

export function connect(successCallback) {
	let host = config.dbHost;
	let dbName = config.dbName;

	let mongoString = `mongodb://${host}/${dbName}`;
	mongoose.connect(mongoString);

	let db = mongoose.connection;

	db.on('error', console.log);
	db.once('open', successCallback);
}

export function getConnection() {
	return mongoose.connection;
}