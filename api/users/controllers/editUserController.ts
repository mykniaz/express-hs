import { Request, Response } from 'express';

import { userModel } from '../models';

const editUserController = async (req: Request, res: Response) =>  {
  const { id } = req.body;

  const user = await userModel.find(id);

  res.send({
    ...user,
    id: user._id,
  });
};

export default editUserController;
