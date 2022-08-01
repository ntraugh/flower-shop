const mongoose = require("mongoose");
const { Schema } = require("mongoose")

const bouquetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
    occasion: [{
        type: Schema.Types.ObjectId,
        ref: "Occasion"
    }],
    featured: {
        type: Boolean,
        required: true,
    }
})


const Bouquet = mongoose.model("Bouquet", bouquetSchema)

module.exports = Bouquet
