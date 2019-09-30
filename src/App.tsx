import * as React from 'react';
import {EffectCallback} from "react";

const App: React.FC = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect((props, nextProps) => {
    if (props.movies.length === nextProps.movies.length) return;

    fetch('/movies')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        // console.log(myJson)
        // setMovies(myJson.movies);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        Movies list
      </header>
      <div>
        {movies.map((item: { id: string, name: string}) => (<div key={item.id}>{item.name}</div>))}
      </div>
    </div>
  );
};

export default App;
