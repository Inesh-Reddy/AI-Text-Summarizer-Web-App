const { userModel } = require("../../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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

const login = (req, res) => {
  res.json({
    msg: "user login endpoint",
  });
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
