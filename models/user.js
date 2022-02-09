const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  company: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Users", UserSchema);
