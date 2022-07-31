require('dotenv').config();
import express, { Application } from 'express';
import { sequelize } from './db/models/index';
const PORT: number = Number(process.env.PORT) || 7800;

const app: Application = express();

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
