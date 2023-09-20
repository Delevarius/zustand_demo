import "react";
import useStore from "../store";
import { StyledButton, StyledInput } from "../styles";

function Header() {
  const {
    newTodo,
    setNewTodo,
    addTodo
  } = useStore((state) => state);

  return (
    <div className="flex flex-col w-full">
      <h2>Super Amazing Todo App</h2>
      <div className="flex w-full space-x-10">
        <input
          value={newTodo}
          className={StyledInput}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New todo"
        />
        <button
          className={StyledButton}
          onClick={() => {
            addTodo();
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default Header;