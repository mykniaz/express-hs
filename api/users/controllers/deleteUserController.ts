import { Request, Response } from 'express';

import { TUserProps, userModel } from '../models';

const deleteUserController = async (req: Request, res: Response) =>  {
  const { id } = req.body;

  const remUser: TUserProps = await userModel.deleteOne({ _id: id });

  res.send(remUser);
};

export default deleteUserController;
