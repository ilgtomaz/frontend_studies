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

    if (start === finish) {
      startElementsId.splice(source.index, 1);
      startElementsId.splice(destination.index, 0, draggableId);

      const newCards = startElementsId.map(id => {
        return start.elements.find(element => element.uniqueId === id);
      });

      start.elements = newCards;
      start.card.items = newCards;
      start.card.notify();
    }
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
