import { Router } from 'express';
import { get, create } from '../controllers';

const moviesRouter = Router();

moviesRouter.get('/', get);
moviesRouter.get('/create', create);

export { moviesRouter };
