import { Sequelize } from 'sequelize';
require('dotenv').config();
//import User from './User';

//import { DateToDoCluster } from './DateToDoCluster';
const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '../config.ts')[env];

const sequelize =
	/*config.url*/
	// ? new Sequelize(config.url, config)
	new Sequelize(
		String(process.env.DB_NAME),
		String(process.env.DB_USER),
		String(process.env.DB_PASSWORD),
		{
			dialect: 'postgres',
			host: String(process.env.DB_HOST),
			port: Number(process.env.DB_PORT),
		}
	);
const User = require('./User')(sequelize);
const DateToDoCluster = require('./DateToDoCluster')(sequelize);

export { Sequelize, sequelize };
