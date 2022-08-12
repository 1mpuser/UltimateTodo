import { Request, Response } from 'express';
import ToDo from '../models/ToDo';
import jwt_decode from 'jwt-decode';
interface IDecoded {
	username: string;
}
class ToDoController {
	async getAllFromUser(req: Request, res: Response) {
		try {
			const token = String(req.headers.authorization).split(' ')[1];
			const obj = jwt_decode(token) as IDecoded;
			const { username } = obj;
			const todos = await ToDo.find({ username });
			return res.json(todos);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Get ToDos arr' });
		}
	}
	async getByDate(req: Request, res: Response) {
		try {
			const { date } = req.params;
			const token = String(req.headers.authorization).split(' ')[1];
			const obj = jwt_decode(token) as IDecoded;
			const { username } = obj;
			const todos = await ToDo.find({ username, date });
			return res.json(todos);
		} catch (error) {
			console.log(error);
			res.status(404).json({ message: 'Error while finding todos' });
		}
	}
	async postToDo(req: Request, res: Response) {
		try {
			const token = String(req.headers.authorization).split(' ')[1];
			const obj = jwt_decode(token) as IDecoded;
			const { username } = obj;
			const { text, completed, time, date, memo } = req.body;
			console.log(req.body);
			console.log(memo);
			const todo = new ToDo({ text, completed, date, time, username, memo });
			await todo.save();
			return res.json(todo);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Error while posting toDo' });
		}
	}
}
export default ToDoController;
