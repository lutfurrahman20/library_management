import { Book } from "../book/book.model";
import { IBorrow } from "./borrow.interface";
import Borrow from "./borrow.model";

const borrowBook = async (payload: IBorrow) => {
  const { book: bookId, quantity, dueDate } = payload;

  const book = await Book.findById(bookId);
  if (!book) throw new Error("Book not found");
  if (book.copies < quantity) throw new Error("Not enough copies available");

  book.copies -= quantity;
  if (book.copies === 0) book.available = false;
  await book.save();

  const borrowRecord = await Borrow.create({ book: bookId, quantity, dueDate });
  return borrowRecord;
};

const getBorrowSummary = async () => {
  return Borrow.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "bookInfo",
      },
    },
    { $unwind: "$bookInfo" },
    {
      $project: {
        _id: 0,
        book: {
          title: "$bookInfo.title",
          isbn: "$bookInfo.isbn",
        },
        totalQuantity: 1,
      },
    },
  ]);
};

export const BorrowService = {
  borrowBook, getBorrowSummary
};
