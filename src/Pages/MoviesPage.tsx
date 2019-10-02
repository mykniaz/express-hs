import * as React from 'react';
import FilmForm from '../FilmForm';
import FilmCard from '../FilmCard';
import Preloader from '../Preloader';

import { Request } from '../utils';

interface IFilmItem {
  id: string;
  name: string;
  type: string;
}

const MoviesPage = () => {
  const [movies, setMovies] = React.useState([]);
  const [isShownPreloader, setPreloader] = React.useState(false);

  React.useEffect(
    () => {
      updateMovies();
    },
    [],
  );

  const updateMovies = () => {
    setPreloader(true);

    const request = new Request();

    request.get('/movies')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovies(json.movies);
      })
      .finally(() => setPreloader(false));
  };

  const deleteMovies = (id: string): void => {
    fetch(
      '/movies/delete',
      {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      },
    )
      .then(() => {
        updateMovies();
      });
  };

  const mapList = (isShownPreloader: boolean, movies: IFilmItem[]): React.ReactFragment => {
    if (isShownPreloader) {
      return (
        <div className="row">
          <div className="col text-center">
            <Preloader />
          </div>
        </div>
      );
    }

    return movies.map((item: IFilmItem) => (
      <div
        className="row mb-4"
        key={item.id}
      >
        <div className="col-sm-12">
          <FilmCard {...item} onClickDelete={deleteMovies}/>
        </div>
      </div>
    ));
  };

  return (
    <div className="container my-4">
      {mapList(isShownPreloader, movies)}
      <div className="row">
        <div className="col-sm-12">
          <FilmForm onCreate={updateMovies}/>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
