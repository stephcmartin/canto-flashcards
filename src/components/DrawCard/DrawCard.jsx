import React, { Component } from 'react';
import './DrawCard.css';

class DrawCard extends Component{
    render(){
        return(
            <div className="buttonContainer">
                <button onClick={this.props.drawNewCard} className="btn">Draw Card</button>
            </div>
        )
    };
}

export default DrawCard;
