const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const scoreSchema = Schema({
  _id: Schema.Types.ObjectId,
  quiz: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  },
  score: { type: Number, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("Score", scoreSchema);
