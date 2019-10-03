import { Request, Response } from 'express';

import { TUserProps, userModel} from '../models';

const getUserController = async (req: Request, res: Response) =>  {
  const { id } = req.body;

  const user: TUserProps = await userModel.find(id);

  res.send({
    ...user,
  });
};

export default getUserController;
