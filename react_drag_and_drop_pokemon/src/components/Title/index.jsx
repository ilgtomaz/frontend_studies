import React, { Component } from "react";
import "./style.css";

class Title extends Component {
  render() {
    const { content } = this.props;
    return <p className="title">{content}</p>;
  }
}

export default Title;
