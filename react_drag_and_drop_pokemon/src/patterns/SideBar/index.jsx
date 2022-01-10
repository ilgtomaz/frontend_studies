import React, { Component } from "react";
import CardList from "../../components/CardList";
import "./style.css";

class SideBar extends Component {
  render() {
    const { cards } = this.props;
    return (
      <section className="conteudo__principal__sideBar">
        <p className="conteudo__principal__sideBar__title">Cards</p>
        <CardList cards={cards}></CardList>
      </section>
    );
  }
}

export default SideBar;
