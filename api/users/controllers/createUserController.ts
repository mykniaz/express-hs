import { Request, Response } from 'express';

import { userModel } from '../models';

const createMovieController = async (req: Request, res: Response) =>  {
  const { name, type } = req.body;

  const newUser = await userModel.create({
    name,
    type,
  });

  res.send({
    newUser,
  });
};

export default createMovieController;
