const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());
require("dotenv").config();

const PORT = process.env.PORT || 5000;
var db = require("./models");
// const uri = process.env.MONGODB_URI || "mongodb://localhost/exampleDatabase";
// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Mongo connection established successfully.");
//   })
//   .catch(console.error);

// API routes
//require("./routes/api/example")(app);

// // production build
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});



// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});