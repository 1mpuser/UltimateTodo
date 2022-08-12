import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import ToDoController from '../controllers/todoController';
const todoRouter = Router();
const todoController = new ToDoController();

todoRouter.get('/', authMiddleware, todoController.getAllFromUser); //getAll
todoRouter.get('/:date', authMiddleware, todoController.getByDate); //getFrom date
todoRouter.post('/', authMiddleware, todoController.postToDo); //post toDo

export default todoRouter;
