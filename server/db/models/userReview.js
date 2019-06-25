const mongoose = require("mongoose");

var userReviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  postedTime: {
    type: Date
  }
});

var UserReview = mongoose.model("UserReview", userReviewSchema);
module.exports = { UserReview };
