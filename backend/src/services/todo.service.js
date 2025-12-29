const todoRepository = require("../repositories/todo.repository");

class TodoService {
  async createTodo(data) {
    if (!data.title || data.title.trim() === "") {
      throw new Error("Todo title is required");
    }

    return todoRepository.create({
      title: data.title,
      completed: false,
    });
  }

  async getTodos(status) {
    const filter = {};

    if (status === "completed") {
      filter.completed = true;
    }

    if (status === "pending") {
      filter.completed = false;
    }

    return todoRepository.findAll(filter);
  }

  async toggleTodo(id) {
    const todo = await todoRepository.findById(id);

    if (!todo) {
      throw new Error("Todo not found");
    }

    todo.completed = !todo.completed;
    return todo.save();
  }

  async deleteTodo(id) {
    const todo = await todoRepository.deleteById(id);

    if (!todo) {
      throw new Error("Todo not found");
    }

    return todo;
  }
}

module.exports = new TodoService();
