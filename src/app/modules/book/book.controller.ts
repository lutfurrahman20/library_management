import { Request, Response } from "express";
import { BookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  try {
    const data = await BookService.createBook(req.body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error: any) {
    res
      .status(400)
      .json({ success: false, message: "Book created failed", error });
  }
};
const getBooks = async (req: Request, res: Response) => {
  try {
    const data = await BookService.getBooks(req.query);
    res
      .status(200)
      .json({ success: true, message: "Books retrieved successfully", data });
  } catch (error: any) {
    res
      .status(500)
      .json({ success: false, message: "Books retrieved failed", error });
  }
};
const getBookById = async (req: Request, res: Response) => {
  try {
    const data = await BookService.getBookById(req.params.bookId);
    res
      .status(200)
      .json({ success: true, message: "Books retrieved successfully", data });
  } catch (error: any) {
    res
      .status(404)
      .json({ success: false, message: "Books retrieved failed", error });
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const data = await BookService.updateBook(req.params.bookId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Book updated successfully", data });
  } catch (error: any) {
    res
      .status(400)
      .json({ success: false, message: "Book updated failed", error });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    await BookService.deleteBook(req.params.bookId);
    res
      .status(200)
      .json({ success: true, message: "Book deleted successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ success: false, message: "Book deleted  failed", error });
  }
};
export const BookController = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
