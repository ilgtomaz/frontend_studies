import React, { Component } from "react";
import Title from "../../components/Title";
import CustomDroppable from "../../components/CustomDroppable";
import Card from "../Card";
import "./style.css";

class CardsContent extends Component {
  constructor(props) {
    super(props);
    this.state = { usingCards: [], usedCards: [] };
    this._addNewUsingCards = this._addNewUsingCards.bind(this);
    this._addNewUsedCards = this._addNewUsedCards.bind(this);
  }

  componentDidMount() {
    const { columns } = this.props;
    columns["cardsContent-id-1"].card.subscribe(this._addNewUsingCards);
    columns["cardsContent-id-2"].card.subscribe(this._addNewUsedCards);
  }

  componentWillUnmount() {
    const { columns } = this.props;
    columns["cardsContent-id-1"].card.unsubscribe(this._addNewUsingCards);
    columns["cardsContent-id-2"].card.unsubscribe(this._addNewUsedCards);
  }

  _addNewUsingCards(usingCards) {
    this.setState({ usingCards });
  }

  _addNewUsedCards(usedCards) {
    this.setState({ usedCards });
  }

  render() {
    const { columns, changeModalStatus } = this.props;
    const columnCardsContent1 = columns["cardsContent-id-1"];
    const columnCardsContent2 = columns["cardsContent-id-2"];

    return (
      <section className="conteudo__principal__cardsContent">
        <header className="conteudo__principal__cardsContent__header">
          <Title content={`Cards Drops`} />
        </header>
        <section className="conteudo__principal__cardsContent__main">
          <CustomDroppable droppableId={columnCardsContent1.id}>
            <section className="conteudo__principal__cardsContent__using">
              {this.state.usingCards.map((card, index) => {
                return (
                  <Card
                    key={card.uniqueId}
                    card={card}
                    index={index}
                    changeModalStatus={changeModalStatus}
                  />
                );
              })}
            </section>
          </CustomDroppable>
          <CustomDroppable droppableId={columnCardsContent2.id}>
            <section className="conteudo__principal__cardsContent__used">
              {this.state.usedCards.map((card, index) => {
                return (
                  <Card
                    key={card.uniqueId}
                    card={card}
                    index={index}
                    changeModalStatus={changeModalStatus}
                  />
                );
              })}
            </section>
          </CustomDroppable>
        </section>
      </section>
    );
  }
}

export default CardsContent;
