require('dotenv').config();

module.exports = {
	collection: 'moovee',
	host: process.env.MONGODB_HOST,
	port: process.env.MONGODB_PORT,
	username: process.env.MONGODB_USERNAME,
	password: process.env.MONGODB_PASSWORD
};
