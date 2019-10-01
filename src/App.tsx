import * as React from 'react';
import Header from './Header';
import Form from './Form';

const App: React.FC = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(
    () => {
      updateMovies();
    },
    [movies.length],
  );

  const renderMapList = () => {
    return movies.map((item: { _id: string, name: string}) => (
      <div key={item._id}>{item.name}</div>
    ));
  };

  const updateMovies = () => {
    fetch('/movies')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setMovies(myJson.movies);
      });
  };

  return (
    <div className="app">
      <Header/>
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-12">
            {renderMapList()}
          </div>
        </div>
        <Form onCreate={updateMovies}/>
      </div>
    </div>
  );
};

export default App;
