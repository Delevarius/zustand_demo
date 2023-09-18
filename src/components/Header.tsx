import "react";
import useStore from "../store";

function Header() {
  const {
    newTodo,
    setNewTodo,
    addTodo
  } = useStore((state) => state);

  return (
    <div className="flex flex-col w-full">
      <h2>Super Amazing Todo App</h2>
      <div className="flex w-full">
        <input
          value={newTodo}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New todo"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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