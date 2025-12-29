const Todo = require("../models/todo.model");

class TodoRepository {
  async create(todoData) {
    return Todo.create(todoData);
  }

  async findAll(filter = {}) {
    return Todo.find(filter).sort({ createdAt: -1 });
  }

  async findById(id) {
    return Todo.findById(id);
  }

  async updateById(id, updateData) {
    return Todo.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteById(id) {
    return Todo.findByIdAndDelete(id);
  }
}

module.exports = new TodoRepository();
