const Mongoose = require("mongoose");

const TokenSchema = new Mongoose.Schema({
  userId: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
    unique: true,
  },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), expires: 3600 }, // 1 hour
});

const Token = Mongoose.model("token", TokenSchema);
module.exports = Token;
