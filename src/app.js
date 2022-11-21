const express = require("express"),
  { resolve } = require("path");

/*Initiate Express app*/
const app = express();

//Middleware appicable identically in all environments
//app.use(express.static(resolve(__dirname, "..", "client", "build"))); //To serve static files such as images, CSS, and JS
app.use(express.urlencoded({ extended: true })); //parses incoming requests with urlencoded payloads
app.use(express.json()); //parses incoming request bodies and makes it available under the req.body property.

/*Define routes*/
app.use("/", require("./routes/match"));

module.exports = app;
