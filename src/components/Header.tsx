import "react";
import useStore from "../store";
import { StyledButton, StyledInput } from "../styles";

function Header() {
  const {
    newTodo,
    addTodo,
    setNewTodo
  } = useStore();
  return (
    <div className="flex flex-col w-full items-center space-y-10">
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Super Amazing Todo App
      </h2>
      <div className="flex w-full space-x-10">
        <input
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          className={StyledInput}
          placeholder="New todo"
        />
        <button
          className={StyledButton}
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default Header;