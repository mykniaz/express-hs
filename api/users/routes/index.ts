import { Router } from 'express';
import { get, create } from '../controllers';

const userRouter = Router();

userRouter.get('/', get);
userRouter.get('/create', create);

export { userRouter };
