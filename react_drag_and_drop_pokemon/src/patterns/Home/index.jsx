import React, { Component, createRef } from "react";
import CustomDragDropContext from "../../components/CustomDragDropContext";
import axios from "axios";
import SearchBar from "../SearchBar";
import SideBar from "../SideBar";
import CardsContent from "../CardsContent";
import Modal from "../../components/Modal";
import { CardList } from "../../data";
import { columns } from "../../constants/dragAndDrop";
import "./style.css";

class Home extends Component {
  constructor() {
    super();
    this.addNewAlerts = this.addNewAlerts.bind(this);
    this.cards = new CardList(this.addNewAlerts);
    this.state = { alerts: [], isShow: false, card: {} };
    this.modalRef = createRef(null);
  }

  componentDidUpdate() {
    if (this.state.alerts.length > 0) {
      const message = this.state.alerts.reduce(
        (previousValue, currentValue, index) => {
          return previousValue + `${index + 1} - ${currentValue.message}\n`;
        },
        ""
      );
      alert(message);
      this.setState({ alerts: [] });
    }
  }

  addNewCard(data) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${data}/`).then((result) => {
      this.cards.addNewCard(result.data);
    });
  }

  addNewAlerts(data) {
    const alerts = this.state.alerts;
    alerts.push(data);
    this.setState({ ...this.state, alerts });
  }

  changeModalStatus(card) {
    if (!card) {
      card = {};
    }

    const isShow = !this.state.isShow;
    this.setState({ ...this.state, 
      isShow,
      card
     });
  }

  render() {
    columns["sideBar"].card = this.cards;
    columns["sideBar"].elements = this.cards.items;
    return (
      <main className="conteudo">
        <SearchBar addNewCard={this.addNewCard.bind(this)} />
        <CustomDragDropContext column={columns["sideBar"]}>
          <section className="conteudo__principal">
            <SideBar
              cards={this.cards}
              changeModalStatus={this.changeModalStatus.bind(this)}
            />
            <CardsContent />
          </section>
        </CustomDragDropContext>
        <Modal
          isShow={this.state.isShow}
          modalRef={this.modalRef}
          changeModalStatus={this.changeModalStatus.bind(this)}
          card={this.state.card}
        />
      </main>
    );
  }
}

export default Home;
