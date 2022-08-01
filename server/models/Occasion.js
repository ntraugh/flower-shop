const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const occasionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String
    }
})

const Occasion = mongoose.model ("Occasion", occasionSchema)

module.exports = Occasion;