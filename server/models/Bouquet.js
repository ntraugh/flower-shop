const { Schema, model, } = require("mongoose")

const bouquetSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        unique: true,
    },
    occasion: {
        type: String,
        requried: true,
        unique: true,
    },
    featured: {
        type: Boolean,
        required: true,
    }
})


const Bouquet = mongoose.model("Bouquet", bouquetSchema)

module.exports = Bouquet
