const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const actorSchema = require('~models/schema/actor');
const awardsSchema = require('~models/schema/awards');

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		lowercase: true,
		trim: true
	},

	originalTitle: {
		type: String,
		lowercase: true,
		trim: true
	},

	externalId: new mongoose.Schema(
		{
			imdb: {
				type: String,
				required: true
			},
			tmdb: String
		},
		{ _id: false }
	),

	url: new mongoose.Schema(
		{
			imdb: String
		},
		{ _id: false }
	),

	year: String,

	rate: new mongoose.Schema(
		{
			imdb: Number,
			metascore: Number
		},
		{ _id: false }
	),

	runtime: String,

	images: new mongoose.Schema(
		{
			poster: String,
			backdrop: String
		},
		{ _id: false }
	),

	plot: {
		_id: false,
		simple: String,
		full: String
	},

	trailer: {
		type: String,
		trim: true
	},

	languages: {
		type: [String],
		lowercase: true,
		trim: true
	},

	genres: {
		type: [String],
		lowercase: true,
		trim: true
	},

	countries: {
		type: [String],
		lowercase: true,
		trim: true
	},

	budget: {
		type: String,
		trim: true
	},

	directors: [String],

	writers: [String],

	actors: [actorSchema],

	awards: awardsSchema,

	state: {
		_id: false,
		loading: {
			type: Boolean
		},
		fulfilled: {
			type: Boolean
		},
		updating: {
			type: Boolean
		}
	}
});

movieSchema.plugin(timestamps);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
