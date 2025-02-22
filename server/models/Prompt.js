const mongoose = require("mongoose");

const PromptSchema = new mongoose.Schema({
  chatId: { type: String, required: true, unique: true },
  prompt: { type: String, required: true },
  response: { type: String, required: true },
  createdAt: { type: String, required: true },
  chatTitle: { type: String, required: true },
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Prompt", PromptSchema);
