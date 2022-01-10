export const columns = {
  sideBar: {
    id: 'sideBar-id',
    elements: [],
    card: {},
    getElementsIds() {
      const { elements } = columns.sideBar;
      return elements.map(element => element.uniqueId);
    }    
  },
  cardsContent: {
    id: 'cardsContent-id',
    elements: [],
    card: {},
    getElementsIds() {
      const { elements } = columns.cardsContent;
      return elements.map(element => element.uniqueId);
    }
  }
}