# 📚 Book Management API

This is a simple Node.js + Express.js API for managing a list of books stored in memory. It supports full CRUD operations with authentication, validation, logging middleware, and error handling.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- Middleware (Logger, Auth, Validation)
- In-memory storage (No database)

---

## 📁 Repository

**GitHub Repo**: [`Sanngeeta/Book-Management-Project`](https://github.com/Sanngeeta/Book-Management-Project)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Sanngeeta/Book-Management-Project.git
cd Book-Management-Project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
npm start
```

> Make sure `package.json` has:
```json
"scripts": {
  "start": "nodemon app.js"
}
```

---

## Authentication

All routes (except `GET /api/fetched-books`) require this header:

```http
x-api-key: secret123
```

---

## 🔪 API Endpoints

| Method | Endpoint                    | Description         | Auth Required |
|--------|-----------------------------|---------------------|----------------|
| GET    | /book/fetched-books          | Get all books       | ❌ No         |
| POST   | /book/add-new-book           | Add a new book      | ✅ Yes        |
| GET    | /book/get-book-by-id/:id     | Get book by ID      | ✅ Yes        |
| PUT    | /book/update-book-by-id/:id  | Update book by ID   | ✅ Yes        |
| DELETE | /book/delete-book-by-id/:id  | Delete book by ID   | ✅ Yes        |

---

## 📦 Example curl Requests

### ➕ Add a Book
```bash
curl -X POST http://localhost:3000/api/add-new-book \
-H "Content-Type: application/json" \
-H "x-api-key: secret123" \
-d '{"title": "Atomic Habits", "author": "James Clear", "year": 2018}'
```

### 📚 Get All Books
```bash
curl http://localhost:3000/api/fetched-books
```

### 📖 Get Book by ID
```bash
curl http://localhost:3000/api/get-book-by-id/1 \
-H "x-api-key: secret123"
```

### ✏️ Update Book by ID
```bash
curl -X PUT http://localhost:3000/api/update-book-by-id/1 \
-H "Content-Type: application/json" \
-H "x-api-key: secret123" \
-d '{"title": "Updated Book", "author": "Updated Author", "year": 2023}'
```

### ❌ Delete Book by ID
```bash
curl -X DELETE http://localhost:3000/api/delete-book-by-id/1 \
-H "x-api-key: secret123"
```

---

## Limitations

- Books are stored **in memory**, not in a database.
- Data is lost when the server restarts.

---

## 📝 Logging

Each request is logged in the terminal in the following format:

```
2025-07-03T11:00:00Z - GET /api/fetched-books
```

---

## ❗ Error Handling

- `400`: Invalid input (validation failed)
- `401`: Unauthorized (missing or invalid API key)
- `404`: Book not found
- `500`: Internal server error

---

