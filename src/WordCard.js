import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
/* ถ้าระบบไม่รู้จัก _ หรือ lodash ให้พิมพ์คำสั่ง 
    npm i -g npm
    npm i --save lodash
   ใน Command Prompt หรือ Terminal (ตอนนั้นชี้อยู่ที่ card-game กล่าวคือ D:/card-game แล้วพิมพ์ npm i -g npm .....)
   โดยมันจะเอา lodash มาติดตั้งให้
*/
import './App.css';
//Import Photo
//This isn't good way to import photo from the folder
//นี่ไม่ใช่วิธีที่ดีในการเอาภาพมาจาก folder แต่ผมทำวิธีอื่นไม่เป็นแล้วครับ เดี๋ยวค่อยฝึก
import  './photo/cherprang.jpg';
import  './photo/izurina.jpg';
import './photo/jaa.jpg';
import  './photo/jane.jpg';
import  './photo/jennis.jpg';
import './photo/jib.jpg';
import  './photo/kaew.jpg';
import  './photo/kaimook.jpg';
import  './photo/kate.jpg';
import  './photo/korn.jpg';
import  './photo/maysa.jpg';
import  './photo/mind.jpg';
import  './photo/miori.jpg';
import  './photo/mobile.jpg';
import  './photo/music.jpg';
import  './photo/namneung.jpg';
import  './photo/namsai.jpg';
import  './photo/nink.jpg';
import  './photo/noey.jpg';
import './photo/orn.jpg';
import  './photo/piam.jpg';
import './photo/pun.jpg';
import  './photo/pupe.jpg';
import  './photo/satchan.jpg';
import  './photo/tarwaan.jpg';

// Member photo from www.bnk48.com/#/members 
// This website is for educational purpose No copyright infringement intention.
//import value from './photo/'+value+'.jpg';

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

    refresh () {
            window.location.reload()
    }

    activationHandler = (c) => { 
        let guess = [this.state.guess]+c
        this.setState({guess})
        if(guess.length === this.state.chars.length){
            if(guess === this.state.word){
                this.setState({guess: [], completed:true})
            }
            else if(this.state.attempt === 5){
                //สั่งให้แจ้งเตือน ว่าคุณทำไปครบทั้ง 5 ครั้งแล้ว
                window.alert("You Lost ไปฝึกมาใหม่")
                //สั่งให้หน้าเว็บ Refresh เพื่อขึ้นคำถามข้อใหม่
                window.location.reload()
            }
            else{
                this.setState({guess: [],attempt: this.state.attempt + 1})
                //result ="You Lost Try Again"
            }
        }

    

     }
   
    render(){
        let isActiveState =this.state.completed  ? 'acenter' : 'dis-none'
        let isActivePhoto =this.state.completed  ? 'member-photo' : 'dis-none'
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
                <h4>ตอนนี้คุณเลือกไปแล้ว {this.state.guess.length} / {this.state.chars.length} </h4>
                <h4>ความพยายามครั้งที่ {this.state.attempt} / 5 </h4>
                {/*ต้องระบุ State ให้มันด้วย*/}
                <h4>Result : {this.state.completed ? 'You Win เมมเบอร์คนนั้นคือ ': 'Please Fill until Finished'} </h4>
                
                {/*Thank you https://stackoverflow.com/questions/42580130/display-images-in-react-using-jsx-without-import */}
                <img className={isActivePhoto} src={this.state.completed ? require('./photo/'+this.state.word.toLowerCase()+'.jpg') :'' } alt={this.state.completed ? this.state.word : ''} />
                <h2 className={isActiveState}>{this.state.completed ? this.state.word + '  BNK48' : ''} </h2>
                <h6 className={isActiveState}>{this.state.completed ?  'ใช่โอชิของคุณหรือเปล่า ' : ''} </h6>

                {/*Thank you https://stackoverflow.com/questions/42580130/display-images-in-react-using-jsx-without-import */}
                <br/>
                <button className="center-button btn btn-primary" onClick={(e) => this.refresh(e)}>เปลี่ยนคำถาม</button>
            </div>
        );
    }
}