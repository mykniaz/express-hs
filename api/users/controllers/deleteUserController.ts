import { Request, Response } from 'express';

import { userModel } from '../models';

const deleteUserController = async (req: Request, res: Response) =>  {
  const { _id } = req.body;

  const remMovie = await userModel.delete({ _id });

  res.send({
    remMovie,
  });
};

export default deleteUserController;
