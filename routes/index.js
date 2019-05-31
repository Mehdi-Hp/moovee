module.exports = {
	name: 'App Routes',
	version: '0.0.0',
	async register(server, options) {
		await server.register([
			{
				plugin: require('./movies'),
				routes: {
					prefix: '/api/v1/movies'
				}
			}
		]);
	}
};
