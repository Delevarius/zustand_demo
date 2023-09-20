import "react";

import { StyledButton, StyledCheckbox, StyledInput } from "../styles";
import useStore from "../store";

function TodoListItems() {
  const {
    todos,
    toggleTodo,
    updateTodo,
    removeTodo
  } = useStore();
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
      <h2 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900">Todo items:</h2>
      <TodoListItems />
    </>
  );
}

export default TodoList;