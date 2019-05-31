const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	summary: {
		type: String,
		trim: true
	},
	full: [
		new mongoose.Schema({
			_id: false,
			name: {
				type: String,
				lowercase: true,
				trim: true
			},
			title: {
				type: String,
				lowercase: true,
				trim: true
			},
			year: {
				type: Number,
				trim: true
			},
			outcomes: [
				{
					_id: false,
					result: {
						type: String,
						lowercase: true,
						trim: true
					},
					award: {
						type: String,
						lowercase: true,
						trim: true
					},
					category: {
						type: String,
						lowercase: true,
						trim: true
					},
					participants: {
						type: [String],
						lowercase: true,
						trim: true
					}
				}
			]
		})
	]
});
