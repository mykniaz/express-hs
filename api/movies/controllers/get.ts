import { Request, Response } from 'express';

import { movieModel } from '../models';

const get = async (req: Request, res: Response) =>  {
  const movies = await movieModel.find({});

  res.send({
    movies,
  });
};

export default get;
