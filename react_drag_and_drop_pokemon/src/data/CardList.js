import axios from "axios";

export class CardList {
  constructor(addNewAlert) {
    this.items = [];
    this._inscritos = [];
    this.addNewAlert = addNewAlert;
  }

  addNewCard(data) {
    const newCard = new Card(data);
    const isAlreadyAddedCard = this.items.find(
      (item) => item.id === newCard.id
    );

    if (!isAlreadyAddedCard) {
      this.items.push(newCard);
      this.notify();
    } else {
      this.addNewAlert({
        message: `Pokémon #${newCard.id} já adicionado`,
        type: "warning",
        name: "pokemon_already_exists",
      });
    }
  }

  subscribe(callback) {
    this._inscritos.push(callback);
  }

  unsubscribe(callback) {
    this._inscritos = this._inscritos.filter((cb) => cb !== callback);
  }

  notify() {
    for (const callback of this._inscritos) {
      callback(this.items);
    }
  }
}

class Card {
  constructor(data) {
    const { abilities, name, id, sprites, types: foundTypes } = data;
    this.name = name;
    this.id = id;
    this.uniqueId = `card-${id}`;
    this.types = this._getTypesArray(foundTypes);
    this.image = this._getImageObject(sprites);
    this.image.description = `Imagem ${this.name}`;
    this.ability = {
      normal: abilities.find((ability) => !ability.is_hidden)?.ability?.name,
      hidden: abilities.find((ability) => ability.is_hidden)?.ability?.name,
    };
    this.stats = data.stats.map((stat) => ({
      base: stat.base_stat,
      effort: stat.effort,
      name: stat.stat.name,
    }));

    const movesPromise = data.moves.map((move) =>
      this.createGetMovePromise(move)
    );

    this.getMoves(movesPromise);
  }

  getMoves(movesPromise) {
    Promise.allSettled(movesPromise).then(
      function (result) {
        this.moves = this.getSuccessfullyPromiseResult(result);
      }.bind(this)
    );
  }

  getSuccessfullyPromiseResult(result) {
    return result
      .map(function (data) {
        if (data.status === "fulfilled") {
          return data.value;
        }

        return undefined;
      })
      .filter(Boolean);
  }

  async createGetMovePromise(move) {
    return axios.get(move.move.url).then((result) => {
      const { data } = result;
      const effect = data.effect_entries.find(
        (entry) => entry.language.name === "en"
      );
      return {
        accuracy: data.accuracy,
        demageType: data.damage_class.name,
        effect: {
          description: effect.effect,
          sideEffect: effect.short_effect,
        },
        name: data.name,
        power: data.power,
        pp: data.pp,
        target: data.target.name,
        type: data.type.name,
      };
    });
  }

  _getTypesArray(types) {
    return types.map((type) => ({
      name: type.type.name,
      usedAlt: this._getAltMessage(type.type.name),
    }));
  }

  _getImageObject(sprites) {
    const { other } = sprites;
    const officialArtWork = other["official-artwork"];
    const path = officialArtWork.front_default;
    return {
      description: "",
      path,
    };
  }

  _getAltMessage(type) {
    const altMessages = {
      grass: "Logo do tipo planta",
      fire: "Logo do tipo fogo",
      ghost: "Logo do tipo fantasma",
      ice: "Logo do tipo gelo",
      water: "Logo do tipo água",
      steel: "Logo do tipo aço",
      flying: "Logo do tipo voador",
      fighting: "Logo do tipo lutador",
      normal: "Logo do tipo normal",
      psychic: "Logo do tipo psíquico",
      dragon: "Logo do tipo dragão",
      rock: "Logo do tipo pedra",
      ground: "Logo do tipo terra",
      fairy: "Logo do tipo fada",
      dark: "Logo do tipo escuro",
      poison: "Logo do tipo venenoso",
      bug: "Logo do tipo inseto",
      electric: "Logo do tipo elétrico",
    };
    return altMessages[type] || "Logo não identificado";
  }
}
