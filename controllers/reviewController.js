const Review = require('../models/review');

const fetchReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

const fetchReview = async (req, res) => {
  const reviewId = req.params.id;
  try {
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the review' });
  }
};

const createReview = async (req, res) => {
  const { title, body, name, date } = req.body;
  try {
    const review = await Review.create({
      title,
      body,
      name,
      date,
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the review' });
  }
};

const updateReview = async (req, res) => {
  const reviewId = req.params.id;
  const { title, body, name, date } = req.body;
  try {
    const review = await Review.findByIdAndUpdate(
      reviewId,
      {
        title,
        body,
        name,
        date,
      },
      { new: true }
    );
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the review' });
  }
};

const deleteReview = async (req, res) => {
  const reviewId = req.params.id;
  try {
    const review = await Review.findByIdAndDelete(reviewId);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json({ success: `Deleted review with id ${reviewId}` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the review' });
  }
};

module.exports = {
  fetchReviews,
  fetchReview,
  createReview,
  updateReview,
  deleteReview,
};
