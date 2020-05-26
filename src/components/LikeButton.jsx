import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  addCounte = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addCounte}> {this.state.count} Likes </button>
      </div>
    );
  }
}

export default LikeButton;
