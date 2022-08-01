const { Schema, model, default: mongoose } = require("mongoose");

const occasionSchema = new mongoose.model({
    name: {
        type: String,
        required: true,
        unique: true,
        bouquet: [{
            type: Schema.Types.ObjectId,
            ref: "Bouquet"
        }]
    },
})

const Occasion = mongoose.model ("Occasion", occasionSchema)

module.exports = Occasion;