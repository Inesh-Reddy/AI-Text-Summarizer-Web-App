const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connectToDB } = require("./utils/db");
const userRouter = require("./routes/userRouter");
const cors = require("cors");

dotenv.config();
const url = process.env.MONGO_URL;
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/user/auth", userRouter);

const start = async () => {
  await connectToDB(url);
  app.listen(3000, async () => {
    console.log(`Server is listening on port: 3000...`);
  });
};
start();
