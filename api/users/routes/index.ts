import { Router } from 'express';
import {
  getUserController,
  editUserController,
  authUserController,
  loginUserController,
  deleteUserController,
} from '../controllers';

const userRouter = Router();

userRouter.get('/auth', authUserController);
userRouter.get('/login', loginUserController);
userRouter.get('/user/get', getUserController);
userRouter.get('/user/edit', editUserController);
userRouter.get('/user/delete', deleteUserController);

export { userRouter };
