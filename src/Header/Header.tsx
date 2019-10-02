import * as React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header className="navbar navbar-dark bg-dark mb-4">
    <div className="container">
      <div className="row flex-grow-1">
        <div className="col col-sm-6">
          <Link className="navbar-brand mr-2" to="/" aria-label="Home Server">Home Server</Link>
        </div>
        <div className="col col-sm-6 text-right">
          <Link to="/login" className="btn btn-primary ml-4">Login</Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
