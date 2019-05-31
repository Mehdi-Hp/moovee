const mongoose = require('mongoose');
const chalk = require('chalk');
const debug = require('debug')('app:database');
const { username, password, host, port, collection } = require('../config/database');

const connectionString = (() => {
	if (username && password) {
		return `mongodb://${username}:${password}@${host}:${port}/${collection}`;
	}
	return `mongodb://@${host}:${port}/${collection}`;
})();

const listenAndLog = (mongooseConnection) => {
	mongooseConnection.on('error', (error) => {
		throw error;
	});
	mongooseConnection.once('connecting', () => {
		debug(chalk.underline.cyan(`Connecting to MongoDB...`));
	});
	mongooseConnection.once('open', () => {
		debug(chalk.underline.cyan(`Connected to MongoDB, ${mongooseConnection.name} collection`));
	});
};
const connect = async ({ debug }) => {
	if (debug) {
		listenAndLog(mongoose.connection);
	}
	await mongoose.connect(connectionString, {
		autoReconnect: true,
		useNewUrlParser: true,
		useCreateIndex: true
	});
	const mongooseConnection = mongoose.connection;
	return mongooseConnection;
};

module.exports = { connect };
