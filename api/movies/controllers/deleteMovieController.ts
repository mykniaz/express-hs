import { Request, Response } from 'express';

import { movieModel } from '../models';

const deleteMovieController = async (req: Request, res: Response) =>  {
  const { id } = req.body;

  const remMovie = await movieModel.find({ _id: id }).remove();

  res.send({
    ...remMovie,
    id: remMovie._id,
  });
};

export default deleteMovieController;
