import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
import './App.css';


const prepareStateFormWord = (given_word) =>{
    /*Recieve word from App.js */
   
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt : 1,
        guess: [],
        completed: false
        /*word คือ คำต้นฉบับ 
        chars คือ ตัวอักษรแต่ละตัวที่สุ่มลำดับมาแล้ว
        attemp คือ จำนวนครั้งที่พยายามเล่น 
        guess คือข้อความที่เด่ามา 
        complete คือ สิ้นสุดหรือไม่
        อันนี้คือให้ Guess ไปเรื่อยๆ แต่ทดลองแค่ครั้งเดียว 
         */
    }
}
export default class WordCard extends Component{
    constructor(props){
        super(props)
        this.state = prepareStateFormWord(this.props.value)
        /*เป็นการนำ props มา  Set ค่า State */
        /*ขอขอบคุณไอเดียบางอย่างจาก GitHub ของเพื่อนผมครับ จาก GitHub sunisathammasoon (https://github.com/sunisathammasoon/)
         หวังว่าอาจารย์คงไม่ว่าอะไรนะครับ เนื่องจากมันเป็นประโยชน์สำคัญของ GitHub โดยเอามาตรงที่

    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    } 

    และ let guess = [this.state.guess,c] เป็น let guess = [this.state.guess]+c
    */
    }
    
    activationHandler = (c) => { 
        let guess = [this.state.guess]+c
        //let result = "waiting for selected"
        this.setState({guess})
        if(guess.length === this.state.chars.length){
            if(guess === this.state.word){
                this.setState({guess: [], completed:true})
                //result ="You Win"
            }
            else{
                this.setState({guess: [],attempt: this.state.attempt + 1})
                //result ="You Lost Try Again"
            }
        }
     }
   
    render(){
        return(
            <div>
                { 
                    /*
                    { Array.from(this.state.chars).map( 
                    (c,i)=> <CharacterCard value = {c} key = {i} attempt={this.state.attempt} 
                    activateHandler={this.activateHandler}/> 
                    ได้ไอเดียจาก https://github.com/Ikhalas/ ครับ
                    */

                     /*นำค่า State มาใช้ เพื่อจะได้เห็นมัน Random */ 
                    Array.from(this.state.chars).map((c,i) => <CharacterCard value = {c} key = {i}  attempt={this.state.attempt}  activationHandler = {this.activationHandler} />) 
                    /*prop คือตัวที่มันส่งข้ามไฟล์ แต่ State คือสถานะ ณ ขณะนี้ เราต้อง Define มาตอนนี้เราอยู่ props ไหน State ไหน ถึงจะนำค่าไปใช้ได้ */
                }
                <h3>ตอนนี้คุณเลือกไปแล้ว {this.state.guess.length} / {this.state.chars.length} </h3>
                {/*ต้องระบุ State ให้มันด้วย*/}
                <h3>Result : {this.state.completed ? 'You Win' : 'Please Fill until Finished'} </h3>
            </div>
        );
    }
}