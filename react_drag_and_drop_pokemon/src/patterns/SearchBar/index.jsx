import React, { Component } from "react";
import PokemonLogo from "../../assets/img/pokemon_logo.png";
import "./style.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: "text",
      searchValue: ""
    };
  }

  _handleInputValue(event) {
    const searchValue = event.target.value;
    this.setState({ ...this.state, searchValue });
  }

  _addNewCard(event) {
    event.preventDefault();
    event.stopPropagation();
    const { addNewCard } = this.props;
    const { searchValue } = this.state;
    addNewCard(searchValue.toLocaleLowerCase());
  }

  render() {
    return (
      <section className="conteudo__searchBar">
        <img
          src={PokemonLogo}
          alt="Logo Pokémon"
          className="conteudo__searchBar__logo"
        />
        <form className="conteudo__searchBar__search">
          <label>Procurar por: </label>
          <input
            type={this.state.searchType}
            placeholder={`Digite o nome ou número do pokémon...`}
            onChange={this._handleInputValue.bind(this)}
            className="conteudo__searchBar__search__input"
          />
          <button
            className="conteudo__searchBar__search__button"
            onClick={this._addNewCard.bind(this)}
          >
            Adicionar
          </button>
        </form>
      </section>
    );
  }
}

export default SearchBar;
