const mongoose = require("mongoose");
const Joke = require("./jokesModel");

const commentsSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "comment can not be empty!"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    joke: {
      type: String,
      required: [true, "comment must belong to a user"],
      maxlength: [
        40,
        "A username must have less than or equal to 40 characters",
      ],
      minlength: [1, "A username must have atleast one character"],
    },
    user: {
      type: String,
      default: "Anonymous user",
      maxlength: [
        40,
        "A username must have less than or equal to 40 characters",
      ],
      minlength: [1, "A username must have atleast one character"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Comment = mongoose.model("Comment", commentsSchema);
module.exports = Comment;
