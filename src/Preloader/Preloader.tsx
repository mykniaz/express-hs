import * as React from 'react';

const Preloader = () => {
  return (
    <div className="spinner-border text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Preloader;
