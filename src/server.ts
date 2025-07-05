import mongoose from "mongoose";
import config from "./config";
import app from "./app";

const server = async () => {
  try {
    await mongoose.connect(config.database_url!);
    console.log("connected to mongoose....");

    await app.listen(config.port, () => {
      console.log("Listening in the port", config.port);
    });
  } catch (error) {
    console.log(error);
  }
};

server();
