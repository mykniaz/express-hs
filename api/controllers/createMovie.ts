import { Request, Response } from 'express';

import { Movie } from '../models';

const createMovies = async (req: Request, res: Response) =>  {
  const movies = await Movie.create({

  });

  res.send({
    movies,
  });
};

export default createMovies;
