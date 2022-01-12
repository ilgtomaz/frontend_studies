import React, { Component } from "react";
import Title from "../../components/Title";
import "./style.css";

class CardsContent extends Component {
  render() {
    return (
      <section className="conteudo__principal__cardsContent">
        <header className="conteudo__principal__cardsContent__header">
          <Title content={`Cards Content`} />
        </header>
        <section className="conteudo__principal__cardsContent__main">
          <section className="conteudo__principal__cardsContent__using">
            quadro_1
          </section>
          <section className="conteudo__principal__cardsContent__used">
            quadro_2
          </section>
        </section>
      </section>
    );
  }
}

export default CardsContent;
