import "react";

import useStore from "../store";
import { StyledButton, StyledCheckbox, StyledInput } from "../styles";

function TodoListItems() {
  const {
    todos,
    toggleTodo,
    updateTodo,
    removeTodo
  } = useStore((state) => state);

  return (
    <>
      {todos.map((todo) => (
        <div
          className="flex space-between space-x-4 w-full"
          key={todo.id}
        >
          <input
            type="checkbox"
            className={StyledCheckbox}
            onClick={() => toggleTodo(todo.id)}
            checked={todo.done}
          />
          <input
            className={StyledInput}
            value={todo.text}
            onChange={(e) => updateTodo(todo.id, e.target.value)}
          />
          <button
            className={StyledButton}
            onClick={() => removeTodo(todo.id)}
          >Delete</button>
        </div>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <h4>Todo items:</h4>
      <TodoListItems />
    </>
  );
}

export default TodoList;