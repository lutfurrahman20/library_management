import { Router } from "express";
import bookRouter from "../modules/book/book.routes";
import borrowRouter from "../modules/borrow/borrow.routes";

const router = Router();

router.use("/api", bookRouter);
router.use("/api", borrowRouter);

export default router;
