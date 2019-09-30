import { Router } from 'express';
import { getMovies, createMovie } from '../controllers';

const movieRouter = Router();

movieRouter.get('/', getMovies);
movieRouter.get('/create', createMovie);

export default movieRouter;
