# Scalable Todo System

A full-stack Todo application built as part of a technical assessment.

The focus of this project is clean architecture, separation of concerns, and a smooth user experience — not overengineering.

---

## Tech Stack

### Frontend
- React (Functional Components + Hooks)
- React Context API (Observer Pattern)
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

---

## Architecture & Design Patterns

### 1. Repository Pattern (Backend)
Database access is isolated in a repository layer (`todo.repository.js`), keeping business logic independent from the data source.

### 2. Observer Pattern (Frontend)
Global state is managed using React Context. When a Todo changes, all subscribed components update automatically.

---

## Features

- Full CRUD operations (Create, Read, Update, Delete)
- Toggle todo completion
- Filter todos by status (All / Pending / Completed)
- Clean and responsive UI
- RESTful API design
- Input validation and error handling

---

## API Endpoints

- `GET /api/tasks`
- `POST /api/tasks`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`

---

## Running the Project Locally

### Backend
```bash
cd backend
npm install
npm run dev
