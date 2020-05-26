import React, { Component } from 'react';

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      currentPicture: 2
      // imgs: [...this.props.imgs]
    };
  }

  clickLeft() {
    let newPosition = this.state.currentPicture;
    newPosition--;
    if (newPosition < 0) {
      newPosition = this.props.imgs.length;
    }

    this.setState({
      currentPicture: newPosition
    });
  }

  clickRight() {
    let newPosition = this.state.currentPicture;
    newPosition++;
    if (newPosition > this.props.imgs.length) {
      newPosition = 0;
    }
    this.setState({
      currentPicture: newPosition
    });
  }

  render() {
    return (
      <div>
        <img src={this.props.imgs[this.state.currentPicture]} alt="" />
        <button onClick={this.clickLeft()}>Left</button>
        <button onClick={this.clickRight()}>Right</button>
      </div>
    );
  }
}

export default Carousel;
