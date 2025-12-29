const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todo.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", todoRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
