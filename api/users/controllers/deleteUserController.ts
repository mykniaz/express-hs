import { Request, Response } from 'express';

import { userModel } from '../models';

const deleteUserController = async (req: Request, res: Response) =>  {
  const { id } = req.body;

  const remUser = await userModel.delete({ _id: id });

  res.send({
    ...remUser,
    id: remUser._id,
  });
};

export default deleteUserController;
