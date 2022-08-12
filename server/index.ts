require('dotenv').config();
import path from 'path';
import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRouter from './routes';
// const apiRouter = require('./routes');

import mongoose from 'mongoose';
const PORT = process.env.PORT || 5000;

const app: Application = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

const start = async () => {
	try {
		await mongoose.connect(String(process.env.MONGOURL));
		app.listen(PORT, () => console.log(`Server stated on port : ${PORT}`));
		app.get('/', (req, res) => {
			res.send('Works!');
		});
	} catch (error) {
		console.log(error);
	}
};

start();
