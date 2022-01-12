export const columns = {
  "sideBar-id": {
    id: "sideBar-id",
    elements: [],
    card: {},
    getElementsIds() {
      const { elements } = columns["sideBar-id"];
      return elements.map((element) => element.uniqueId);
    },
  },
  "cardsContent-id-1": {
    id: "cardsContent-id-1",
    elements: [],
    card: {},
    getElementsIds() {
      const { elements } = columns["cardsContent-id-1"];
      return elements.map((element) => element.uniqueId);
    },
  },
  "cardsContent-id-2": {
    id: "cardsContent-id-2",
    elements: [],
    card: {},
    getElementsIds() {
      const { elements } = columns["cardsContent-id-2"];
      return elements.map((element) => element.uniqueId);
    },
  },
};
