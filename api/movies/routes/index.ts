import { Router } from 'express';
import { json } from 'body-parser';

import { getMovieController, createMovieController, deleteMovieController } from '../controllers';

const moviesRouter = Router();

moviesRouter.get('/', getMovieController);
moviesRouter.post('/create', json(), createMovieController);
moviesRouter.post('/del', json(), deleteMovieController);

export { moviesRouter };
