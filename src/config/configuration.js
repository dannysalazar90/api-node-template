'use strict';

let dbHost = process.env.API_DB_HOST || 'localhost';
let dbName = process.env.API_DB_NAME || 'applicationDb';
let nodeEnv = process.env.NODE_ENV || 'dev';

let appPort = process.env.API_PORT || 3000;

export default {
	env : nodeEnv,
	dbHost : dbHost,
	dbName : dbName,
	port : appPort
};