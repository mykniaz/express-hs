import { Request, Response } from 'express';

import { movieModel } from '../models';

const createMovies = async (req: Request, res: Response) =>  {
  const newMovie = await movieModel.create({
    type: 'horror',
  });

  console.log(newMovie);

  res.send({
    newMovie,
  });
};

export default createMovies;
