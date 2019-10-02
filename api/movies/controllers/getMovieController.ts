import { Request, Response } from 'express';

import { movieModel } from '../models';

const getMovieController = async (req: Request, res: Response) =>  {
  const movies = await movieModel.find({});

  const newMovies = movies.map(({ _doc }) => ({
    ..._doc,
    id: _doc._id,
  }));

  res.send({ movies: newMovies });
};

export default getMovieController;
