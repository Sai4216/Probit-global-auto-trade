const body_parser = require("body-parser");
const express = require("express");
const app = express();
const connectDB = require("./configure/dbconn");
connectDB();
const cors = require("cors");
app.use(cors());
app.use(body_parser.json());

app.use(express.json());
const mongoose = require("mongoose");
app.use("/", require("./Routers/root"));
app.get("*", (req, res) => {
  res.end("no page");
});
mongoose.connection.once("open", () => {
  console.log("database is connected");
  app.listen(5000, () => {
    console.log("server is started");
  });
});

