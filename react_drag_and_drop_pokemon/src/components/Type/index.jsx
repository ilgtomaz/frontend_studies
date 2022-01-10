import React, { Component } from "react";
import pokemonTypesIcons from "../../assets/img/pokemon_types";
import "./style.css";

class Type extends Component {
  render() {
    const { name, usedAlt } = this.props;
    const usedClasses = `conteudo__principal__sideBar__card__type conteudo__principal__sideBar__card__type__${name.toLowerCase()}`;
    const SvgIcon = pokemonTypesIcons[name.toLowerCase()];
    return (
      <div className={usedClasses}>
        <SvgIcon
          alt={usedAlt}
          className="conteudo__principal__sideBar__card__type__icon"
        />
        <span>{name}</span>
      </div>
    );
  }
}

export default Type;
