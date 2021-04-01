const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()

    },

    exercise: [{
        name: {
            type: String
        },
        type: {
            type: String
        },
        weight: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;