import { Router } from "express";
import { BorrowController } from "./borrow.controller";

const borrowRouter = Router();

borrowRouter.post("/borrow", BorrowController.borrowBook);
borrowRouter.get("/borrow", BorrowController.getBorrowSummary);

export default borrowRouter;
