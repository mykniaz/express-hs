import { Request, Response } from 'express';

import { userModel } from '../models';

const loginMovieController = async (req: Request, res: Response) =>  {
  try {
    const user = await userModel.findOne({ username: req.body.username }).exec();

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
