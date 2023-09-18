import * as React from "react";

import useStore from "../store";

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
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
            onClick={() => store.toggleTodo(todo.id)}
            checked={todo.done}
          />
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
      <h4>Todo List</h4>
      <TodoListItems />
    </>
  );
}

export default TodoList;