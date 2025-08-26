# Library Management API
A fully-featured RESTful API for managing a library system, built with Express.js, TypeScript, and MongoDB. Effortlessly manage books, handle borrowing operations, and generate insightful borrowing reports.

# Base URL
Live API Base URL: https://library-management-phi-tan.vercel.app/

## Features

- Create, Read, Update, and Delete books
- Borrow books with quantity and due date
- Automatically update availability based on copies
- Aggregated report of borrowed books
- Filtering and sorting support on books
- Error handling with standard format
- Built-in schema validation, instance/static methods, and middleware

## Technologies Used

- Node.js + Express.js
- TypeScript
- MongoDB + Mongoose
- Mongoose Middleware
- RESTful API Structure
- Aggregation Pipelines

## Folder Structure

```

src/
├── app/
│ ├── modules/
│   ├── book/
│   └── borrow/
│ 
├── config/
├── app.ts
└── server.ts


```
## API Documentation
### Book API

## API Endpoints
### 1. Create a Book

URL: POST /api/books
### Body:
```bash
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}

```


### Response
```bash
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "book_id_here",
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "description": "An overview of cosmology and black holes.",
    "copies": 5,
    "available": true,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### 2. Get All Books
URL: GET /api/books
`Query Params`: filter, sortBy, sort, limit
### Response:
 ```bash
 {
  "success": true,
  "message": "Books retrieved successfully",
  "data": [ ]
}
 ```

### 3 Get Book by ID
URL: GET /api/books/:bookId
### Response
```bash
{
  "success": true,
  "message": "Book retrieved successfully",
  "data": { }
}
```

### 4. Update a Book
`URL: PUT /api/books/:bookId`

`Body: Partial or full fields to update (same as create)`

### Response:
```bash
{
  "success": true,
  "message": "Book updated successfully",
  "data": {  }
}
```

### 5. Delete a Book
`URL: DELETE /api/books/:bookId`

### Response:
```bash
{
  "success": true,
  "message": "Book deleted successfully",
  "data": null
}

```
### 6. Borrow a Book
`URL: POST /api/borrow`

#### Body:
```bash
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```

#### Business Logic:

`Verifies the book exists.`

`Checks enough copies are available.`

`Deducts borrowed quantity from book’s copies.`

`Updates available to false if copies become 0.`

`Saves borrow record.`

#### Response:
```bash
{
  "success": true,
  "message": "Book borrowed successfully",
  "data": {
    "_id": "borrow_record_id",
    "book": "64ab3f9e2a4b5c6d7e8f9012",
    "quantity": 2,
    "dueDate": "2025-07-18T00:00:00.000Z",
    "createdAt": "...",
    "updatedAt": "..."
  },
}
```


### 7. Borrowed Books Summary
URL: GET /api/borrow

### Response:
```bash
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [],
 {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"`
      },
      "totalQuantity": 5
    },
     {
      "book": {
        "title": "1984",
        "isbn": "9780451524935"
      },
      "totalQuantity": 3
    }
  }
}

```
## Run Locally

Clone the project

```bash
  git clone https://github.com/lutfurrahman20/library_management.git
```

Go to the project directory

```bash
  cd library_management
```

Install dependencies

```bash
  npm install
```
### Setup .env 
```bash
NODE_ENV="development"
PORT=
DB_URL=

```
Start the server

```bash
  npm run dev
```

