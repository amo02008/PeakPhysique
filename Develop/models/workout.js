const mongoose = require ("mongoose");

const Schema = mongoose.Schema
const workout = new Schema({
    day:{
        type: Date,
        default: Date.now()

    }
})
