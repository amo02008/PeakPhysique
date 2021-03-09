const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./exerciseModel.js");
const app = express();

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });