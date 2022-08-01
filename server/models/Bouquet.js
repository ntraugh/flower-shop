const { Schema, model, } = require("mongoose")

const bouquetSchema = new mongoose.Schema({
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