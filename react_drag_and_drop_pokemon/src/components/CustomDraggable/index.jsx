import React, {
  Component,
  cloneElement,
  Children,
  isValidElement,
} from "react";
import { Draggable } from "react-beautiful-dnd";

class CustomDraggable extends Component {
  render() {
    const { draggableId, index, children } = this.props;

    return (
      <Draggable draggableId={draggableId} index={index}>
        {(provided) => {
          const { draggableProps, dragHandleProps, innerRef: ref } = provided;
          return Children.map(children, (child) => {
            if (isValidElement(child)) {
              return cloneElement(child, {
                ...draggableProps,
                ...dragHandleProps,
                ref,
              });
            }
          });
        }}
      </Draggable>
    );
  }
}

export default CustomDraggable;
