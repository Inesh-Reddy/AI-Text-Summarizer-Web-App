const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  console.log(req.headers);
  const headerToken = req.headers.token;

  if (!headerToken || !headerToken.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Access denied: No headerToken provided or invalid format",
    });
  }
  const token = headerToken.split(" ")[1];
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = {
      _id: decoded.data,
    };

    next();
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error during headerToken verification" });
  }
};

module.exports = verifyToken;
