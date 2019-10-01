import { Request, Response } from 'express';

import { movieModel } from '../models';

const deleteMovieController = async (req: Request, res: Response) =>  {
  const { _id } = req.body;

  const remMovie = await movieModel.delete({ _id });

  res.send({
    remMovie,
  });
};

export default deleteMovieController;
