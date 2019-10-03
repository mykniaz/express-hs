import { Router } from 'express';
import {
  getUserController,
  editUserController,
  authUserController,
  loginUserController,
  deleteUserController,
} from '../controllers';
import { json } from 'body-parser';

const userRouter = Router();

userRouter.post('/auth', json(), authUserController);
userRouter.post('/login', json(), loginUserController);
userRouter.get('/user/get', getUserController);
userRouter.post('/user/edit', json(), editUserController);
userRouter.post('/user/delete', json(), deleteUserController);

export { userRouter };
