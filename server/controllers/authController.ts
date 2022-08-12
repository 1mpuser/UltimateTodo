import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import generateAccessToken from '../scripts/generateAccessToken';
import User from '../models/User';
class AuthController {
	async registration(req: Request, res: Response) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res
					.status(400)
					.json({ message: 'Ошибка при регистрации', errors });
			}
			const { username, password } = req.body;
			const existingUser = await User.findOne({ username });
			if (existingUser)
				return res.status(403).json({
					message: 'This user is already in database:(',
				});
			const hashPassword = bcrypt.hashSync(password, 5);
			console.log(hashPassword);
			const user = new User({
				username,
				password: hashPassword,
			});
			await user.save();
			const token = generateAccessToken(user._id, username);
			return res.json({ token });
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Registation error' });
		}
	}
	async login(req: Request, res: Response) {
		try {
			const { username, password } = req.body;
			const user = await User.findOne({ username });
			if (!user) {
				return res
					.status(400)
					.json({ message: `Пользователь ${username} не найден` });
			}
			const validPassword = bcrypt.compareSync(password, user.password);
			if (!validPassword) {
				return res.status(400).json({ message: `Введен неверный пароль` });
			}
			const token = generateAccessToken(user._id, username);
			return res.json({ token });
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Login error' });
		}
	}
	async getUsers(req: Request, res: Response) {
		try {
			const users = await User.find();
			return res.json(users);
		} catch (error) {
			console.log(error);
			res.status(400).json({ message: 'Get users error' });
		}
	}
	async check(req: Request, res: Response) {
		const { id, username } = req.body;
		const token = generateAccessToken(id, username);
		return res.json({ token });
	}
}
export default AuthController;
