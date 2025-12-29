import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async (status) => {
    setLoading(true);
    try {
      const query = status ? `?status=${status}` : "";
      const res = await fetch(`http://localhost:5000/api/tasks${query}`);
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Failed to fetch todos");
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title) => {
    const res = await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    if (res.ok) {
      fetchTodos();
    }
  };

  const toggleTodo = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PATCH",
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        fetchTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
