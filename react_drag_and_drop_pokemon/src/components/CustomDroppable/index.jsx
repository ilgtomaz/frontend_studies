import React, {
  Component,
  cloneElement,
  Children,
  isValidElement,
} from "react";
import { Droppable } from "react-beautiful-dnd";

class CustomDroppable extends Component {
  render() {
    const { droppableId, children } = this.props;

    return (
      <Droppable droppableId={droppableId}>
        {(provided) => {
          const { innerRef: ref, droppableProps, placeholder } = provided;
          return Children.map(children, (child) => {
            if (isValidElement(child)) {
              return cloneElement(
                child,
                {
                  ref,
                  ...droppableProps,
                },
                [
                  ...child.props.children,
                  cloneElement(placeholder, {
                    key: child.props.children.length,
                  }),
                ]
              );
            }
          });
        }}
      </Droppable>
    );
  }
}

export default CustomDroppable;
