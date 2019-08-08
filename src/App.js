import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';

class App extends React.Component() {
  state = {
    balls: {},
    strikes: {}
  }

  render() {
    return (
      <div className="App">
        <h1>Player At-Bat</h1>
        <Display />
      </div>
    )
  }
  
}

export default App;
