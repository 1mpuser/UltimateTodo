import { Router } from 'express';
const apiRouter = Router();
// const authRouter = require('./authRouter');
import authRouter from './authRouter';
import todoRouter from './todoRouter';

apiRouter.use('/auth', authRouter);
apiRouter.use('/todo', todoRouter);

export default apiRouter;
