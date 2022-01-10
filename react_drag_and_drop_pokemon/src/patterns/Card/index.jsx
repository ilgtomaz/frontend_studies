import React, { Component } from "react";
import CustomDraggable from "../../components/CustomDraggable";
import { ReactComponent as PokeballLogo } from "../../assets/img/pokeball_logo.svg";
import ListTypes from "../../components/ListTypes";
import "./style.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { cardClasses: "conteudo__principal__sideBar__card__image" };
  }

  _handleMouseOver(event) {
    let cardClasses = this.state.cardClasses;
    cardClasses = `${cardClasses} conteudo__principal__sideBar__card__image__hover`;
    this.setState({ ...this.state, cardClasses });
  }

  _handleMouseLeave(event) {
    let cardClasses = "conteudo__principal__sideBar__card__image";
    this.setState({ ...this.state, cardClasses });
  }

  _onDragEng(result) {}

  render() {
    const { card, index } = this.props
    const { id, uniqueId, name, types, image } = card;
    const usedClasses = `conteudo__principal__sideBar__card conteudo__principal__sideBar__card_${this._getMainType(
      types
    )}`;

    return (
      <CustomDraggable draggableId={uniqueId} index={index}>
        <div
            className={usedClasses}
            onMouseOver={this._handleMouseOver.bind(this)}
            onMouseLeave={this._handleMouseLeave.bind(this)}
          >
            <div className="conteudo__principal__sideBar__card__info">
              <p className="conteudo__principal__sideBar__card__number">
                #{id}
              </p>
              <p className="conteudo__principal__sideBar__card__name">{name}</p>
              <ListTypes types={types} />
            </div>
            <PokeballLogo className="conteudo__principal__sideBar__card__logo" />
            <img
              className={this.state.cardClasses}
              src={image.path}
              alt={image.description}
            />
          </div>
      </CustomDraggable>
    );
  }

  _getMainType(types) {
    if (types.length > 1) {
      const isDragon = types.find((type) => type.name === "dragon");
      if (isDragon) return "dragon";
      const mainTypes = types.filter((type) => type.name !== "normal");
      return mainTypes[0].name.toLowerCase();
    }

    return types[0].name.toLowerCase();
  }
}

export default Card;
