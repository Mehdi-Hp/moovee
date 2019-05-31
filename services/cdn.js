const cloudinary = require('cloudinary');

const {
	cloudinary: { apiKey, apiSecret }
} = require('~config/secrets');

const start = () => {
	cloudinary.config({
		cloud_name: 'lastscene',
		api_key: apiKey,
		api_secret: apiSecret
	});
};

module.exports = { start };
