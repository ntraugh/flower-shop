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
    },
    // bouquets: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Bouquet"
    // }]
})

const Occasion = mongoose.model ("Occasion", occasionSchema)

module.exports = Occasion;