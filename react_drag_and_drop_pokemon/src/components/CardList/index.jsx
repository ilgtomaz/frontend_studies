import React, { Component } from "react";
import CustomDroppable from "../CustomDroppable";
import Card from "../../patterns/Card";
import { columns } from "../../constants/dragAndDrop";
import "./style.css";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
    this._newCards = this._newCards.bind(this);
  }

  componentDidMount() {
    const { cards } = this.props;
    cards.subscribe(this._newCards);
  }

  componentWillUnmount() {
    const { cards } = this.props;
    cards.unsubscribe(this._newCards);
  }

  _newCards(cards) {
    this.setState({ ...this.state, cards });
  }

  render() {
    const { cards } = this.state;
    const { changeModalStatus } = this.props;
    return (
      <CustomDroppable droppableId={columns["sideBar-id"].id}>
        <div className="conteudo__principal__sideBar__cardList">
          {cards.map((card, index) => {
            return (
              <Card
                key={card.uniqueId}
                card={card}
                index={index}
                changeModalStatus={changeModalStatus}
              />
            );
          })}
        </div>
      </CustomDroppable>
    );
  }
}

export default CardList;
