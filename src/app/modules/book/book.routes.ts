import { Router } from "express";
import { BookController } from "./book.controller";

const bookRouter = Router();

bookRouter.post("/books", BookController.createBook);
bookRouter.get("/books", BookController.getBooks);
bookRouter.get("/books/:bookId", BookController.getBookById);

bookRouter.put("/books/:bookId", BookController.updateBook);
bookRouter.delete("/books/:bookId", BookController.deleteBook);

export default bookRouter;
