#  Library Management API

A fully-featured RESTful API for managing a library system, built with **Express.js**, **TypeScript**, and **MongoDB**. Effortlessly manage books, handle borrowing operations, and generate insightful borrowing reports.

##  Base URL  
**Live API Base URL:** `https://your-live-url.com`

##  Core Features

Create, Read, Update, and Delete books
Borrow books with quantity and due date
Automatically update availability based on copies
Aggregated report of borrowed books
Filtering and sorting support on books
Error handling with standard format
Built-in schema validation, instance/static methods, and middleware

##  Tech Stack

- **Node.js** & **Express.js**
- **TypeScript**
- **MongoDB** with **Mongoose**
- RESTful API conventions
- Mongoose Middleware & Aggregation Pipelines

##  Project Structure
src/
├── app/
│ ├── modules/
│   ├── book/
│   └── borrow/
│ 
├── config/
├── server.ts
└── index.ts


##  Available API Endpoints

###  Books

#### ➕ Create a Book  
**POST** `/api/books`  
 Request:

{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}

 Get All Books
GET /api/books?filter=SCIENCE&sortBy=createdAt&sort=desc&limit=5

 Get Book by ID
GET /api/books/:bookId

 Update Book
PUT /api/books/:bookId
Example:
{
  "copies": 50
}


Delete Book
DELETE /api/books/:bookId


 Borrow

 Borrow a Book
POST /api/borrow
Request:

{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}

 Borrowed Books Summary
GET /api/borrow
Response:

{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    }
  ]
}

Error Response Format

{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "copies": {
        "message": "Copies must be a positive number",
        "name": "ValidatorError",
        "kind": "min",
        "path": "copies",
        "value": -5
      }
    }
  }
}

