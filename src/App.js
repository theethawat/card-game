import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';
//const word = "Hello";
class App extends Component {
  render() {
    return (
      <div>
      <h3>โปรแกรมเดาคำให้ถูกต้อง</h3>
      {/*เป็นการเรียกใช้ class ที่ชื่อ WordCard โดยส่งคำว่า Hello ไป*/}
      <WordCard value="Hello" />
      </div>
    );
  }
}

export default App;
