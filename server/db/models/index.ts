import { Sequelize } from 'sequelize';
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

export const sequelize = new Sequelize(
	String(process.env.DB_NAME),
	String(process.env.DB_USER),
	String(process.env.DB_PASSWORD),
	{
		dialect: 'postgres',
		host: String(process.env.DB_HOST),
		port: Number(process.env.DB_PORT),
	}
);
export default sequelize;
//export { Sequelize, sequelize };
//export default sequelize
