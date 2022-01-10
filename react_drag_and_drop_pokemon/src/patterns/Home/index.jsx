import React, { Component } from "react";
import CustomDragDropContext from "../../components/CustomDragDropContext";
import axios from "axios";
import SearchBar from "../SearchBar";
import SideBar from "../SideBar";
import CardsContent from "../CardsContent";
import ListaCards from "../../data/ListaCards";
import { columns } from "../../constants/dragAndDrop";
import "./style.css";

class Home extends Component {
  constructor() {
    super();
    this.cards = new ListaCards();
  }

  _addNewCard(data) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${data}/`).then((result) => {
      this.cards.addNewCard(result.data);
    });
  }

  render() {
    columns['sideBar'].card = this.cards;
    columns['sideBar'].elements = this.cards.items;
    return (
      <main className="conteudo">
        <SearchBar addNewCard={this._addNewCard.bind(this)} />
        <CustomDragDropContext column={columns['sideBar']}>
          <section className="conteudo__principal">
            <SideBar cards={this.cards} />
            <CardsContent />
          </section>
        </CustomDragDropContext>
      </main>
    );
  }
}

export default Home;
