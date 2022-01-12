import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";

class CustomDragDropContext extends Component {
  _onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const { columns } = this.props;
    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];
    const startElementsId = start.getElementsIds();
    const finishElementsId = finish.getElementsIds();
    const cards = start.elements;
    const searchedFinishCards = start.elements.concat(finish.elements);

    if (start === finish) {
      startElementsId.splice(source.index, 1);
      startElementsId.splice(destination.index, 0, draggableId);

      const startCards = startElementsId.map(id => {
        return start.elements.find(element => element.uniqueId === id);
      });

      start.elements = startCards;
      start.card.items = startCards;
      start.card.notify();
      return;
    }

    startElementsId.splice(source.index, 1);
    const startCards = startElementsId.map(id => {
      return cards.find(element => element.uniqueId === id);
    }).filter(Boolean);
    start.elements = startCards;
    start.card.items = startCards;
    start.card.notify();

    finishElementsId.splice(destination.index, 0, draggableId);
    const finishCards = finishElementsId.map(id => {
      return searchedFinishCards.find(element => element.uniqueId === id);
    }).filter(Boolean);
    finish.elements = finishCards;
    finish.card.items = finishCards;
    finish.card.notify();
  }

  render() {
    const { children } = this.props;
    return (
      <DragDropContext onDragEnd={this._onDragEnd.bind(this)}>
        {children}
      </DragDropContext>
    );
  }
}

export default CustomDragDropContext;
