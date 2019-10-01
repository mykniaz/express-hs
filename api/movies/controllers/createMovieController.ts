import { Request, Response } from 'express';

import { movieModel } from '../models';

const createMovieController = async (req: Request, res: Response) =>  {
  const { name, type } = req.body;

  const newMovie = await movieModel.create({
    name,
    type,
  });

  res.send({
    newMovie,
  });
};

export default createMovieController;
