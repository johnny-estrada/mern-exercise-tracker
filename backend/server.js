// importing packages express, cors, and mongoose.
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// dotenv loads environment variables from a .env file into process.env.
// This makes development simpler.
// Instead of setting environment variables on our development machine,
// they can be stored in a file.
require("dotenv").config();

// the variable express represents the actual api we're building.
// Express: A web application framework for Node.js.
const app = express();
const port = process.env.PORT || 5000;

// **Cross-origin resource sharing (CORS)**
// allows AJAX requests to skip the and access resources from remote hosts.
// cors package provides an Express middleware that can enable CORS with different options.
app.use(cors());

// telling express to use json data
app.use(express.json());

// This is the connection string from MongoDB Atlas
const uri = process.env.ATLAS_URI;
// // Mongoose is a simple, schema-based solution to model application data.
mongoose.connect(uri, { useNewUrlParser: true });


// This is the connection to mongoose.
const connection = mongoose.connection;

// Connection established
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// DB Routes to exercise and users
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

// event listeners to use routes. 
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// Listening to PORT
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
