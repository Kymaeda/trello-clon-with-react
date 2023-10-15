import { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

type Props = { children: ReactNode };

export const Droppable = (props: Props): JSX.Element => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined
  }
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};
