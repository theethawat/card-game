import React, { Component } from 'react';
import logo from './logo.svg';
import CharacterCard from './CharacterCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CharacterCard value="h"/>
        <CharacterCard value="i"/>
      </div>
    );
  }
}

export default App;
