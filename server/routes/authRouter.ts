import { Router } from 'express';
import AuthController from '../controllers/authController';
const authRouter = Router();
const authController = new AuthController();

authRouter.get('/users', authController.getUsers);
authRouter.post('/registration', authController.registration);
authRouter.post('/login', authController.login);

export default authRouter;
