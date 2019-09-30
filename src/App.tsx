import * as React from 'react';
import Header from './Header';

const App: React.FC = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(
    () => {
      fetch('/movies')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          setMovies(myJson.movies);
        });
    },
    [movies.length],
  );

  const renderMapList = () => {
    return movies.map((item: { id: string, name: string}) => (
      <div key={item.id}>{item.name}</div>
    ));
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div>
          {renderMapList}
        </div>
      </div>
    </div>
  );
};

export default App;
