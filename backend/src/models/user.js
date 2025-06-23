const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { types: String, required: true },
});

const userModel = new mongoose.model("users", userSchema);

module.exports = {
  userModel,
};
