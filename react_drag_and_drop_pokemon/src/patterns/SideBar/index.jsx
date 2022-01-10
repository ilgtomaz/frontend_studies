import React, { Component } from "react";
import ListCards from "../../components/ListCards";
import "./style.css";

class SideBar extends Component {
  render() {
    const { cards } = this.props;
    return (
      <section className="conteudo__principal__sideBar">
        <p className="conteudo__principal__sideBar__title">Cards</p>
        <ListCards cards={cards}></ListCards>
      </section>
    );
  }
}

export default SideBar;
