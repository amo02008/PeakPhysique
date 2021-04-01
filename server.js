const { response } = require("express");
const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  

app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/html-routes.js"));


app.listen(PORT,() => {
    console.log("App running on http://localhost:" + PORT)
})

