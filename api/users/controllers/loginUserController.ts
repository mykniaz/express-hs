import { Request, Response } from 'express';

import { IUserProps, userModel } from '../models';

const loginMovieController = async (req: Request, res: Response) =>  {
  try {
    const user: IUserProps = await userModel.findOne({ login: req.body.login }).exec();

    if (!user) {
      return res.status(400).send({ message: 'The username does not exist' });
    }

    user.comparePassword(req.body.password, (error, match) => {
      if (!match) {
        return res.status(400).send({ message: 'The password is invalid' });
      }
    });

    res.send({ message: 'The username and password combination is correct!' });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default loginMovieController;
