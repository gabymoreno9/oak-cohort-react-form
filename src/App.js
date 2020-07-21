import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="first">
          first box
        </div>
        <div className="second">
          second box
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>hellpos        </p>
      </div>
    </div>
  );
}

export default App;
