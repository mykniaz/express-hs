import { Router } from 'express';
import { getUserController, createUserController, deleteUserController } from '../controllers';

const userRouter = Router();

userRouter.get('/', getUserController);
userRouter.get('/create', createUserController);
userRouter.get('/delete', deleteUserController);

export { userRouter };
