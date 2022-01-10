class ListaCards {
  constructor() {
    this.items = [];
    this._inscritos = [];
  }

  addNewCard(data) {
    const novoCard = new Card(data);
    const isAlreadyAddedCard = this.items.find(item => item.id === novoCard.id);

    if (!isAlreadyAddedCard) {
      this.items.push(novoCard);
      this.notify();
    } else {
      //TODO notificar existencia do card
      console.log('Já existe esse card');
    }
  }

  subscribe(callback) {
    this._inscritos.push(callback);
  }

  unsubscribe(callback) {
    this._inscritos = this._inscritos.filter(cb => cb !== callback);
  }

  notify() {
    for(const callback of this._inscritos) {
      callback(this.items);
    }
  }
}

class Card {
  constructor(data) {
    const { name, id, sprites, types: foundTypes } = data;
    this.name = name;
    this.id = id;
    this.uniqueId = `card-${id}`;
    this.types = this._getTypesArray(foundTypes);
    this.image = this._getImageObject(sprites);
    this.image.description = `Imagem ${this.name}`;
  }

  _getTypesArray(types) {
    return types.map(type => ({
      name: type.type.name,
      usedAlt: this._getAltMessage(type.type.name)
    }));
  }

  _getImageObject(sprites) {
    const { other } = sprites;
    const officialArtWork = other['official-artwork'];
    const path = officialArtWork.front_default;
    return {
      description: '',
      path
    }
  }

  _getAltMessage(type) {
    const altMessages = {
      'grass': 'Logo do tipo planta',
      'fire': 'Logo do tipo fogo',
      'ghost': 'Logo do tipo fantasma',
      'ice': 'Logo do tipo gelo',
      'water': 'Logo do tipo água',
      'steel': 'Logo do tipo aço',
      'flying': 'Logo do tipo voador',
      'fighting': 'Logo do tipo lutador',
      'normal': 'Logo do tipo normal',
      'psychic': 'Logo do tipo psíquico',
      'dragon': 'Logo do tipo dragão',
      'rock': 'Logo do tipo pedra',
      'ground': 'Logo do tipo terra',
      'fairy': 'Logo do tipo fada',
      'dark': 'Logo do tipo escuro',
      'poison': 'Logo do tipo venenoso',
      'bug': 'Logo do tipo inseto',
      'electric': 'Logo do tipo elétrico'
    };
    return altMessages[type] || 'Logo não identificado'
  }

}

export default ListaCards;