const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connectToDB } = require("./utils/db");
const userRouter = require("./routes/userRouter");

dotenv.config();
const url = process.env.MONGO_URL;

app.use(express.json());

app.use("/api/v1/user/auth", userRouter);

const start = async () => {
  await connectToDB(url);
  app.listen(3000, async () => {
    console.log(`Server is listening on port: 3000...`);
  });
};
start();
