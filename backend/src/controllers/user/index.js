const register = (req, res) => {
  res.json({
    msg: "user register endpoint",
  });
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
