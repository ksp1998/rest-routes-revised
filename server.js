require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connection to mongodb
mongoose.connect(process.env.DATABASE_URL);
mongoose.connection
  .on("error", (error) => console.error(error))
  .once("open", () => console.log("Connected to Database"));

app.use(express.json());

// Declaring the API route
const usersRouter = require("./api/users");
app.use("/api/users", usersRouter);

app.listen(3000, () => console.log("Server Started"));
