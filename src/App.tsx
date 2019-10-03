import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { MoviesPage, AuthPage, LoginPage } from './Pages';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Route
          path="/auth"
          exact={true}
          component={AuthPage}
        />
        <Route
          path="/login"
          exact={true}
          component={LoginPage}
        />
        <Route
          path="/movies"
          exact={true}
          component={MoviesPage}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
