import React, { Component } from "react";
import Type from "../Type";
import "./style.css";

class ListTypes extends Component {
  render() {
    const { types } = this.props;
    return (
      <div className="conteudo__principal__sideBar__card__types__group">
        {types.map((type, index) => {
          return <Type key={`type-${index}`} name={type.name} usedAlt={type.usedAlt} />
        })}
      </div>
    );
  }
}

export default ListTypes;
