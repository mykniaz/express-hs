import { Request, Response } from 'express';

import { Movie } from '../models';

const getMovies = async (req: Request, res: Response) =>  {
  const movies = await Movie.find({});

  res.send({
    movies,
  });
};

export default getMovies;
