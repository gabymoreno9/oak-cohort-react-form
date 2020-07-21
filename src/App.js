import React from 'react';
import logo from './logo.svg';
import './App.css';
import camera from './camera.jpeg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="first">
          <img src= {camera} alt ='camera'/>;
          Photography
        </div>
        <div className="second">
          second box
        </div>
      </div>
    </div>
  );
}

export default App;
