import { useCallback, useMemo, useState } from "react";

function Todos(props) {
  const [todos, setTodos] = useState([
    { text: "Complete react tutorial", complete: true },
    { text: "Build todo app", complete: true },
    { text: "Read TypeScript documentation", complete: false },
    { text: "Write unit tests", complete: false },
    { text: "Deploy to production", complete: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");
  const isValidTodoText = useMemo(() => newTodoText.length > 5, [newTodoText]);

  const addTodo = useCallback(() => {
    setTodos([{ text: newTodoText, complete: false }, ...todos]);
    setNewTodoText("");
  }, [todos, newTodoText]);

  const toggleTodo = useCallback(
    (index: number) => {
      setTodos([
        ...todos.slice(0, index),
        { ...todos[index], complete: !todos[index].complete },
        ...todos.slice(index + 1, todos.length),
      ]);
    },
    [todos],
  );

  const deleteTodo = useCallback(
    (deleteIdx: number) => {
      setTodos(todos.filter((todo, idx) => idx !== deleteIdx));
    },
    [todos],
  );

  return (
    <>
      <div className="relative py-12 max-w-md mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full flex flex-col gap-4">
          <h1 className="text-2xl text-gray-800 mb-6 text-center">Todo App</h1>

          <div>
            <div className="flex">
              <input
                type="text"
                placeholder="Add a new todo"
                className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.currentTarget.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addTodo();
                }}
              />
              <button
                onClick={addTodo}
                disabled={!isValidTodoText}
                className={`bg-gray-600 text-white p-3 rounded-r-lg hover:bg-gray-700 transition-colors duration-200 text-sm ${isValidTodoText ? "cursor-pointer" : "cursor-not-allowed"}`}
              >
                Add
              </button>
            </div>
            {newTodoText.length > 0 && !isValidTodoText ? (
              <span className="text-red-500 text-xs">
                Must be atleast 5 letters long
              </span>
            ) : null}
          </div>

          {todos.length === 0 ? (
            <p className="text-gray-500 text-center">
              No todos yet. Add one above!
            </p>
          ) : (
            <ul>
              {todos.map((todo, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-2 shadow-sm">
                  <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={(e) => toggleTodo(index)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                  />
                  <span
                    className="ml-2 flex-grow text-lg {todo.complete
                                ? 'line-through text-gray-500'
                                : 'text-gray-800'}"
                  >
                    {todo.text}
                  </span>
                  <button
                    className="ml-4 text-red-500 hover:text-red-700 transition-colors duration-200 text-lg cursor-pointer"
                    onClick={() => deleteTodo(index)}
                  >
                    &#10007;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center pb-12">
        inertia props = {JSON.stringify(props)}
      </div>
    </>
  );
}

export default Todos;
