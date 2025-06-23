const express = require("express");
const { register, login, logout } = require("../controllers/user");
const userRouter = express.Router();

userRouter.route("/register").post(register);
userRouter.route("/").post(login).get(logout);

module.exports = userRouter;
