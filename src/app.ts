import express from "express";
import cors from "cors";
import router from "./app/routes";
import { globalErrorHandler } from "./app/middleware/errorHandler";

const app = express();
app.use(cors({
  origin : ["https://library-management-client-liard-eta.vercel.app"]
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
