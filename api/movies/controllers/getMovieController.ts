import { Request, Response } from 'express';

import { movieModel, IMovieProps } from '../models';

const getMovieController = async (req: Request, res: Response) =>  {
  const movies: IMovieProps[] = await movieModel.find({});

  const newMovies = movies.map((item, index) => ({
    id: item._id,
    type: item.type,
    name: item.name,
  }));

  res.send({ movies: newMovies });
};

export default getMovieController;
