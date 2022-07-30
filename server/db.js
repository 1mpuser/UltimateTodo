const { Sequelize } = require('sequelize');
const { ToDo, DateToDoCluster, User } = require('./models/models');
module.exports = new Sequelize(
	process.env.DB_NAME, //Название БД
	process.env.DB_USER, //Пользователь
	process.env.DB_PASSWORD, // пароль
	{
		dialect: 'postgres',
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
	}
);
