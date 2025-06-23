const { userModel } = require("../../models/user");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();
const saltRounds = parseInt(process.env.SALTROUNDS);
const jwtSecret = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        msg: "User with email already exist",
      });
    }
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          msg: "server error",
          error: err,
        });
      }
      const result = await userModel.create({
        email,
        password: hash,
      });

      res.status(200).json({
        msg: "user created successfully",
        User: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
      err: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await userModel.findOne({ email });
    if (!exist) {
      return res.status(404).json({
        msg: `Sorry! you are not authorized.`,
      });
    }
    bcrypt.compare(password, exist.password, async (err, result) => {
      if (err) {
        return res.status(500).json({
          msg: err,
        });
      }
      const token = jwt.sign(
        {
          data: exist.password,
        },
        jwtSecret,
        { expiresIn: "1h" }
      );
      res.status(200).setHeader("token", `Bearer ${token}`).json({
        msg: "login successful",
      });
    });
  } catch (error) {
    res.status(500).json({
      err: error,
    });
  }
};

const logout = (req, res) => {
  res.json({
    msg: "user logout endpoint",
  });
};

module.exports = {
  register,
  login,
  logout,
};
