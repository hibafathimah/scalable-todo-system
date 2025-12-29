import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-300 rounded px-3 py-2"
      />
      <button
        type="submit"
        className="bg-[var(--primary)] hover:bg-indigo-700 transition text-white px-4 py-2 rounded-lg"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
