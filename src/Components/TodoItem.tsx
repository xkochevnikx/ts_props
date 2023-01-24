import React, { FC } from "react";
import { ITodo } from "../Types/types";

interface TodoItemProps {
  todo: ITodo;
}
const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={{ padding: 15, border: "2px solid orange" }}>
      {todo.id}.{todo.title} <input type="checkbox" checked={todo.completed} />
    </div>
  );
};

export default TodoItem;
