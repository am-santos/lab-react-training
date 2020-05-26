import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
  constructor() {
    super();
    this.state = {
      dicePictures: [
        '/img/dice1.png',
        '/img/dice2.png',
        '/img/dice3.png',
        '/img/dice4.png',
        '/img/dice5.png',
        '/img/dice6.png'
      ],
      dicePicture: ''
    };
  }

  rollDice = () => {
    this.setState({
      dicePicture: '/img/dice-empty.png'
    });

    setTimeout(() => {
      this.setState({
        dicePicture: this.state.dicePictures[
          Math.floor(Math.random() * (5 + 1))
        ]
      });
    }, 1000);
  };

  render() {
    if (!this.state.dicePicture.length) {
      this.setState({
        dicePicture: this.state.dicePictures[
          Math.floor(Math.random() * (5 + 1))
        ]
      });
    }

    return (
      <img
        onClick={this.rollDice}
        src={this.state.dicePicture}
        alt=""
        className="dice"
      />
    );
  }
}

export default Dice;
