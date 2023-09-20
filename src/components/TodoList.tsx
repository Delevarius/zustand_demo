import "react";

import { StyledButton, StyledCheckbox, StyledInput } from "../styles";

function TodoListItems() {
  const todos = [];
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
            checked={todo.done}
          />
          <input
            className={StyledInput}
            value={todo.text}
          />
          <button
            className={StyledButton}
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