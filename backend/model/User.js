const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  clientID: {
    type: String,
    required: true,
  },
  secretKey: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
