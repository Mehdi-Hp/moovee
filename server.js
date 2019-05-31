require('dotenv').config();

const Hapi = require('hapi');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app:server');
const HapiSwagger = require('hapi-swagger');

const Pack = require('./package');

const { connect: connectToDatabase } = require('~services/database');
const { start: connectToCDN } = require('~services/cdn');
const { host, port } = require('~config/server');
const { isDevelopment } = require('~utils/getEnvironmentMode');

const server = new Hapi.Server({
	port,
	host,
	debug: {
		request: ['error']
	},
	routes: {
		files: {
			relativeTo: path.join(__dirname, 'files')
		}
	}
});

const start = async () => {
	try {
		await connectToDatabase({
			debug: isDevelopment
		});
		connectToCDN();

		await server.register([
			{
				plugin: require('inert')
			},
			{
				plugin: require('@hapi/vision')
			},
			{
				plugin: HapiSwagger,
				options: {
					info: {
						title: 'moovee API Documentation',
						version: Pack.version
					}
				}
			},
			{
				plugin: require('hapi-dev-errors'),
				options: {
					showErrors: isDevelopment
				}
			},
			{
				plugin: require('hapi-boom-decorators')
			},
			{
				plugin: require('./routes')
			}
		]);

		await server.start();

		debug(chalk.underline.cyan(`Server running at ${host}:${port}`));
		debug(chalk.underline.cyan(`API documentation is serving at http://${host}:${port}/documentation`));
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

start();
