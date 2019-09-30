import { Request, Response } from 'express';

import { userModel } from '../models';

const createMovies = async (req: Request, res: Response) =>  {
  const newMovie = await userModel.create({
    type: 'horror',
  });

  console.log(newMovie);

  res.send({
    newMovie,
  });
};

export default createMovies;
