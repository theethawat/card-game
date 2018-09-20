import React, { Component } from 'react';
import logo from './logo.svg';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';

const word = "Hello";
class App extends Component {
  render() {
    return (
      <div>
      {
        /*This is JSX */
        /* From Character card | The Old Part
        Array.from(word).map((c,i) => <CharacterCard value = {c} key = {i} />)
        */
      }
      <WordCard value="hello" />
      </div>
    );
  }
}

export default App;
