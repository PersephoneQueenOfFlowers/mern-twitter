const mongoose = require('mongoose');
const express = require("express");
const db = require('./config/keys').mongoURI;
const app = express();
app.get("/", (req, res) => res.send("Howdo World"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));




