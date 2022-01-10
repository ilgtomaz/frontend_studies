import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";

class CustomDragDropContext extends Component {
  _onDragEnd(result) {
    const { destination, source, draggableId } = result;
    const { column } = this.props;

    if (!destination) {
      return;
    }

    if (
      destination.draggableId === source.draggableId &&
      destination.index === source.index
    ) {
      return;
    }

    const elementsId = column.getElementsIds();
    elementsId.splice(source.index, 1);
    elementsId.splice(destination.index, 0, draggableId);

    const newCards = elementsId.map(id => {
      return column.elements.find(element => element.uniqueId === id);
    });

    column.elements = newCards;
    column.card.items = newCards;
    column.card.notify();
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
