import React, { Component } from 'react';
import logo from './logo.svg';
import WordCard from './WordCard';
import './App.css';

export default class CharacterCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }

    activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value);
            this.setState({active: true})
        }
    }
    render(){
        let className=`card ${this.state.active ? 'activeCard' : ''} `
        return(
            <div className={className} onClick={this.activate                   }>
                {this.props.value}
            </div>
        )
    }
}