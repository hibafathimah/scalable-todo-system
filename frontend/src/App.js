import { useTodos } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";

function App() {
  // const { todos, loading, toggleTodo, deleteTodo } = useTodos();
  const { todos, loading, toggleTodo, deleteTodo, fetchTodos } = useTodos();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--neutral-bg)]">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
        {/* <div className="max-w-xl mx-auto p-6"> */}
        {/* <h1 className="text-2xl font-bold mb-4">Todos</h1> */}
        <h1 className="text-2xl font-bold text-[var(--primary)] mb-1">Tasks</h1>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          Manage your daily tasks efficiently
        </p>

        <TodoForm />
        {/* filter buttons */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => fetchTodos()}
            className="px-4 py-1.5 rounded-full text-sm border border-[var(--neutral-border)] text-[var(--text-primary)] hover:bg-[var(--primary-light)] transition"
          >
            All
          </button>

          <button
            onClick={() => fetchTodos("pending")}
            className="px-4 py-1.5 rounded-full text-sm border border-[var(--neutral-border)] text-[var(--text-primary)] hover:bg-[var(--primary-light)] transition"
          >
            Pending
          </button>

          <button
            onClick={() => fetchTodos("completed")}
            className="px-4 py-1.5 rounded-full text-sm border border-[var(--neutral-border)] text-[var(--text-primary)] hover:bg-[var(--primary-light)] transition"
          >
            Completed
          </button>
        </div>

        {loading && <p>Loading...</p>}

        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="bg-white border border-[var(--neutral-border)] rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo._id)}
                  className="w-4 h-4 accent-[var(--primary)] cursor-pointer"
                />

                <span
                  className={`text-sm ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-[var(--text-primary)]"
                  }`}
                >
                  {todo.title}
                </span>
              </div>

              <button
                onClick={() => deleteTodo(todo._id)}
                className="text-xs text-red-500 hover:text-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
