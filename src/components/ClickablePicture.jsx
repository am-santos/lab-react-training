import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      secondPicture: false
    };
  }

  changePicture = () => {
    this.setState({
      secondPicture: !this.state.secondPicture
    });
  };

  render() {
    const picture2Src = this.props.karen;
    const picture1Src = this.props.aline;
    return (
      <img
        onClick={this.changePicture}
        src={(this.state.secondPicture && picture2Src) || picture1Src}
        alt=""
      />
    );
  }
}

export default ClickablePicture;
