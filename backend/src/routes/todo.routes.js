const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo.controller");

// Create todo
router.post("/", (req, res) => todoController.create(req, res));

// Get all todos (with optional filter)
router.get("/", (req, res) => todoController.getAll(req, res));

// Toggle todo completion
router.patch("/:id", (req, res) => todoController.toggle(req, res));

// Delete todo
router.delete("/:id", (req, res) => todoController.delete(req, res));

module.exports = router;
