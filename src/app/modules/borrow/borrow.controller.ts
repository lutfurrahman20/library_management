import { Request, Response } from "express";
import { BorrowService } from "./borrow.service";

const borrowBook = async (req: Request, res: Response) => {
  try {
    const result = await BorrowService.borrowBook(req.body);
    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Book borrowing failed",
    });
  }
};

const getBorrowSummary = async (_req: Request, res: Response) => {
  try {
    const result = await BorrowService.getBorrowSummary();
    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to get borrowed books summary",
    });
  }
};

export const BorrowController = {
  borrowBook,
  getBorrowSummary,
};
