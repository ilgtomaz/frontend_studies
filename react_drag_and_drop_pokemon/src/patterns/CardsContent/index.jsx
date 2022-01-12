import React, { Component } from "react";
import Title from "../../components/Title";
import CustomDroppable from "../../components/CustomDroppable";
import "./style.css";

class CardsContent extends Component {
  constructor(props) {
    super(props);
    this.state = { usingCards: [], usedCards: [] }
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
    this.setState({ ...this.state, usingCards });
  }

  _addNewUsedCards(usedCards) {
    this.setState({ ...this.state, usedCards });
  }

  render() {
    const { columns } = this.props;
    return (
      <section className="conteudo__principal__cardsContent">
        <header className="conteudo__principal__cardsContent__header">
          <Title content={`Cards Content`} />
        </header>
        <section className="conteudo__principal__cardsContent__main">
          <CustomDroppable droppableId={columns["cardsContent-id-1"].id}>
            <section className="conteudo__principal__cardsContent__using">
              quadro_1
            </section>
          </CustomDroppable>
          <CustomDroppable droppableId={columns["cardsContent-id-2"].id}>
            <section className="conteudo__principal__cardsContent__used">
              quadro_2
            </section>
          </CustomDroppable>
        </section>
      </section>
    );
  }
}

export default CardsContent;
