const express = require("express");
const { register, login, logout } = require("../controllers/user");
const verifyToken = require("../middleware/authMiddleware");
const userRouter = express.Router();

userRouter.route("/register").post(register);
userRouter.route("/").post(login).get(verifyToken, logout);

module.exports = userRouter;
