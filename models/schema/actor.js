const mongoose = require('mongoose');

module.exports = new mongoose.Schema(
	{
		name: {
			type: String,
			lowercase: true,
			trim: true
		},
		character: {
			type: String,
			lowercase: true,
			trim: true
		},
		picture: {
			type: String,
			lowercase: true,
			trim: true
		}
	},
	{ _id: false }
);
