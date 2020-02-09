import React, { Component } from "react";

class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.question}</div>;
  }
}

export default Element;
