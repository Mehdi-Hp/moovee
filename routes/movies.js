const moviesHandler = require('../handlers/moviesHandler');

module.exports = {
	name: 'Movies Routes',
	version: '0.0.0',
	async register(server, options) {
		server.route([
			{
				method: 'GET',
				path: '/{movieID}',
				handler: moviesHandler.find,
				options: {
					tags: ['api'],
					description: 'Find movie information'
				}
			}
		]);
	}
};
