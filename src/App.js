import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';
//const word = "Hello";
class App extends Component {
  render() {
    return (
      <div className="container">
      <br/>
      <h2>Guest Me If You Can</h2>
      <h3>มาลุ้นดูสิ อาจจะเจอกับคำที่ยังรออยู่ </h3>
      {/*เป็นการเรียกใช้ class ที่ชื่อ WordCard โดยส่งคำว่า Hello ไป*/}
      <WordCard value="Hello" />
      </div>
    );
  }
}

export default App;
