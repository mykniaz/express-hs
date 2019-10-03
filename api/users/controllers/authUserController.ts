import { Request, Response } from 'express';

import { userModel } from '../models';

const authUserController = async (req: Request, res: Response) =>  {
  const {
    email,
    login,
    password,
  } = req.body;

  try {
    const user = new userModel({
      email,
      login,
      password,
    });

    const newUser = await user.save();

    res.send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default authUserController;
