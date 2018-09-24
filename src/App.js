import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';
import _ from 'lodash';


const memberRandom = () =>{
  /*Let make it random question */
 
  let member = ['cherprang','music','jennis','pun','mobile','noey']
  let memberAfterRandom = _.shuffle(Array.from(member))
  let firstArrayThatRandom = _.head(memberAfterRandom);
  return{
    firstArrayThatRandom
  }
}

class App extends Component {
  /*เป็นการนำค่า memberRandom ที่เราประกาศให้ Random คำศัพท์นั้น มาประกาศเป็น State เพื่อที่จะนำมาใช้กับตอน rander โดยเอาตัวอย่างมาจาก WordCard.js */
  constructor(props){
    super(props)
    this.state = memberRandom(this.props.value)
    /*เป็นการนำ props มา  Set ค่า State */
    /*ขอขอบคุณไอเดียบางอย่างจาก GitHub ของเพื่อนผมครับ จาก GitHub sunisathammasoon (https://github.com/sunisathammasoon/)*/
}
  render() {
    return (
      <div className="container">
      <br/>
      <h2>Guest Me If You Can</h2>
      <h3>มาลุ้นดูสิ อาจจะเจอกับคำที่ยังรออยู่ </h3>
      <h4>เทสๆ  {this.state.firstArrayThatRandom} </h4>
      {/*เป็นการเรียกใช้ class ที่ชื่อ WordCard โดยส่งคำว่า Hello ไป*/}
      <WordCard value={this.state.firstArrayThatRandom} />
      </div>
    );
  }
}

export default App;
