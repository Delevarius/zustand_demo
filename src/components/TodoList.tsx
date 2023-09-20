import "react";

import useStore from "../store";
import { StyledCheckbox, StyledInput } from "../styles";

function TodoListItems() {
  const store = useStore((state) => state);

  return (
    <>
      {store.todos.map((todo) => (
        <div
          className="flex space-between w-full"
          key={todo.id}
        >
          <input
            type="checkbox"
            className={StyledCheckbox}
            onClick={() => store.toggleTodo(todo.id)}
            checked={todo.done}
          />
          <input
            className={StyledInput}
            value={todo.text}
            onChange={(e) => store.updateTodo(todo.id, e.target.value)}
          />
          <button onClick={() => store.removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <h4>Todo items</h4>
      <TodoListItems />
    </>
  );
}

export default TodoList;