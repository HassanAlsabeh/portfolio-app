const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

process.env.PORT || 3001;

require("dotenv").config();

const app = express();
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.use(express.static(path.join(__dirname, "./public")));

app.use(express.json());

mongoose.connect('mongodb+srv://hassanalsabeh:Intelligent94@cluster0.xbziz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const aboutAdd = require("./routes/about");
app.use("/about", aboutAdd);
const homeAdd = require("./routes/home");
app.use("/home", homeAdd);
// const homeAdd = require('./routes/home');
// app.use('/home', homeAdd);

const aboutedit = require("./routes/edit");
app.use("/abouts", aboutedit);

const projects = require("./routes/projects");
app.use("/project", projects);

const Admins = require("./routes/admin");
app.use("/login", Admins);

const experiences = require("./routes/experiences");
app.use("/experience", experiences);

const contactAdd = require("./routes/contact");
app.use("/contact", contactAdd);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
