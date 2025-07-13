import { IBook, IGetBooksPayload } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (payload: IBook) => {
  const newBook = new Book(payload);
  return await newBook.save();
};

const getBooks = async (query: IGetBooksPayload) => {
  const { filter, sortBy = "createdAt", sort = "desc", limit = "10" } = query;

  const filterQuery: Record<string, any> = {};

  if (filter) {
    filterQuery.genre = filter;
  }

  const sortOrder: 1 | -1 = sort === "asc" ? 1 : -1;
  const sortQuery: Record<string, 1 | -1> = {
    [sortBy]: sortOrder,
  };

  const books = await Book.find(filterQuery)
    .sort(sortQuery)
    .limit(Number(limit));

  return books;
};

const getBookById = async (id: string) => {
  return await Book.findById(id);
};

const updateBook = async (id: string, payload: Partial<IBook>) => {
  return await Book.findByIdAndUpdate(id, payload, { new: true });
};

const deleteBook = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};

export const BookService = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
};
