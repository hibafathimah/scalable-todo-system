const todoService = require("../services/todo.service");

class TodoController {
  async create(req, res) {
    try {
      const todo = await todoService.createTodo(req.body);
      res.status(201).json(todo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const { status } = req.query;
      const todos = await todoService.getTodos(status);
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }

  async toggle(req, res) {
    try {
      const todo = await todoService.toggleTodo(req.params.id);
      res.json(todo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      await todoService.deleteTodo(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new TodoController();
