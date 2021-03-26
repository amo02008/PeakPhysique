const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const workout = require("./models/exerciseModel.js");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/api/workouts", (req,res) => {
workout.aggregate([{
    $addFields: {
        totalDuration: {
            $sum: "$exercises.duration"
        }
    }
}]).then((allworkouts) => {
    res.json (allworkouts)
})
})






app.listen(PORT,() => {
    console.log("App running on http://localhost:" + PORT)
})

