import React, { Component } from "react";
import Title from "../../components/Title";
import CustomDroppable from "../../components/CustomDroppable";
import "./style.css";

class CardsContent extends Component {
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
