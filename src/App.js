import React, { Component } from 'react';
import logo from './logo.svg';
import CharacterCard from './CharacterCard';
import './App.css';

const word = "Hello";
class App extends Component {
  render() {
    return (
      <div>
      {
        /*This is JSX */
        Array.from(word).map((c,i) => <CharacterCard value = {c} key = {i} />)
      }
      </div>
    );
  }
}

export default App;
