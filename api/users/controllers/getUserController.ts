import { Request, Response } from 'express';

import { userModel } from '../models';

const getUserController = async (req: Request, res: Response) =>  {
  const { _id } = res.body;

  const user = await userModel.find(_id);

  res.send({
    user,
  });
};

export default getUserController;
