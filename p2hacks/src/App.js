import React from 'react';
import Confirm from './components/Confirm';
import Home from './components/Home';
import './App.css';
import End from './components/End';
function App() {
  return (
    <div className="App">
      <Home/>
    <Confirm/>
    <End/>
    </div>
  );
}

export default App;
