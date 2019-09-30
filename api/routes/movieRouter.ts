import { Router } from 'express';
import { getMovies } from '../controllers';

const movieRouter = Router();

movieRouter.get('/', getMovies);

export default movieRouter;
