import React, { Component } from 'react';
import './App.css';

export default class CharacterCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.attempt !== this.props.attempt){
            this.setState({active:false})
        }
    }
    activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value);
            this.setState({active: true})
        }
    }
    render(){
        let className=`card ${this.state.active ? 'btn btn-danger' : 'btn '} `
        /*เป็นการตั้ง className โดยบอกว่า State นี้ Active หรือไม่ ถ้า Active ก็เป็น activeCard ถ้าไม่ Active ก็ว่างไว้*/
        return(
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}