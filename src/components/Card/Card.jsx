import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="english">{props.eng}</div>
            </div>
            <div className="front back">
                <div className="hanzi">{props.han}</div>
                <div className="pinying">{props.pin}</div>
            </div>
        </div>
    </div>
)

export default Card;
