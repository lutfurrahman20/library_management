import express from "express";
import cors from "cors";
import router from "./app/routes";
import { globalErrorHandler } from "./app/middleware/errorHandler";

const app = express();
app.use(cors({
  origin : ["http://localhost:5000/",]
}));

app.use(express.json());
app.use(globalErrorHandler);
app.use(router);

app.get("/", (req, res) => {
  res.json({
    message: "Library management server is running..",
    success: true,
  });
});

export default app;
