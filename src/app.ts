import express from "express";
import cors from "cors"
import router from "./app/routes";
const app = express();
app.use(cors())

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.json({
    message: "Library management server is running..",
    success: true,
  });
});

export default app;
