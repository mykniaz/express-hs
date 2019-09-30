import * as React from 'react';

const App: React.FC = () => {
  fetch('/ping')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(JSON.stringify(myJson));
    });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
