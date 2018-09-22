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
    }
    
    activationHandler = (c) => { 
        let guess = [this.state.guess, c]
        this.setState({guess})
        if(guess.length === this.state.chars.length){
            if(guess.join('').toString() === this.state.word){
                this.setState({guess: [], completed:true})
            }
            else{
                this.setState({guess: [],attempt: this.state.attempt + 1})
            }
        }
     }
   
    render(){
        return(
            <div>
                { 
                    Array.from(this.props.value).map((c,i) => <CharacterCard value = {c} key = {i} activationHandler = {this.activationHandler} />) 
                }
            </div>
        );
    }
}