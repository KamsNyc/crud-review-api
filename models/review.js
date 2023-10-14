const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  title: String,
  body: String,
  name: String, 
  date: Date,   
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
