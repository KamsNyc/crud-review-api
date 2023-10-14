//load env
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const reviewsController = require("./controllers/reviewController");
const cors = require("cors");

//create app
const app = express();
connectToDb();


//config express
app.use(express.json());
app.use(cors());


//routing

//ALLOW TO GET ONE REVIEW BY ID: (SINGLE REVIEW)
app.get("/review/:id", reviewsController.fetchReview);

//ALLOW TO GET ALL OF THE REVIEWS THAT ARE THERE (LIST OF ALL NOTES)
app.get("/review", reviewsController.fetchReviews);

//ALLOW USERS TO CREATE REVIEW
app.post("/review", reviewsController.createReview);

//ALLOW TO UPDATE A REVIEW BY ID
app.put("/review/:id", reviewsController.updateReview);

//ALLOW TO DELETE A REVIEW
app.delete("/review/:id", reviewsController.deleteReview);

//start server

app.listen(process.env.PORT);
