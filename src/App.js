import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card'
import DrawCard from './components/DrawCard/DrawCard';

const cardData = require('./data/data.json')

class App extends Component {

  cards = cardData.cards;

  // Initilise State
  constructor(){
    super()
    // Setting Current Card to a random card for the array of cards
    this.state = {
      currentCard: this.getRandomCard(this.cards)
    }
  }

  // Takes in array of cards
    getRandomCard(cards){
      // Creates a number to randomly index
      const randomIndex = Math.floor(Math.random() * cards.length);
      // Setting card to the randomly indexed data
      const card = cards[randomIndex];
      // Returns card back
      return card;
      }

      // Takes in 3 variables
      drawNewCard(currentCard, cards){
          // reutrning cards that area NOT the current card
          cards = cards.filter( card => {
            return card !== currentCard;
           });
          //  Setting state to new random card
        this.setState({
          currentCard: this.getRandomCard(cards)
        })
      }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card
            eng={this.state.currentCard.eng}
            han={this.state.currentCard.han}
            pin={this.state.currentCard.pin}
            />
        </div>
        <div className="buttonRow">
        {/* Fat arrow so that it will NEED to be clicked before used, otherwise will be stuck in infinite loop */}
          <DrawCard drawNewCard={() => this.drawNewCard(this.state.currentCard, this.cards)} />
        </div>
      </div>
    );
  }
}
export default App;
