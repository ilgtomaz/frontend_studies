import React, { Component } from "react";
import CardList from "../../components/CardList";
import Title from "../../components/Title";
import "./style.css";

class SideBar extends Component {
  render() {
    const { cards, changeModalStatus } = this.props;
    return (
      <section className="conteudo__principal__sideBar">
        <Title content={`Cards`} />
        <CardList cards={cards} changeModalStatus={changeModalStatus} ></CardList>
      </section>
    );
  }
}

export default SideBar;
