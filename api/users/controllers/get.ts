import { Request, Response } from 'express';

import { userModel } from '../models';

const get = async (req: Request, res: Response) =>  {
  const users = await userModel.find({});

  res.send({
    users,
  });
};

export default get;
