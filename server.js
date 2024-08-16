require('dotenv').config();
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.REACT_APP_PORT || 3001;

//console.log("REACT_APP_MONGODB_URI: "+process.env.REACT_APP_MONGODB_URI);
//console.log("REACT_APP_PORT: "+process.env.REACT_APP_PORT);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

//Mongo DB connection
mongoose.connect(
  process.env.REACT_APP_MONGODB_URI || "mongodb://localhost/google",
  {
    // useCreateIndex: true,
    useNewUrlParser: true
  }
);

mongoose.connection
  .once("open", () => console.log("MongoDB connected"))
  .on("error", error => {
    console.log("MongoDB error: ", error);
  });

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
