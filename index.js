import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import catRouter from "./src/routes/cats.js";
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

app.use(catRouter);

app.get("/cats", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("App started on port", process.env.PORT);
});
