const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const orderSchema = new Schema({
    Id: {
        type: Schema.Types.ObjectId,
        unique: true,
    },
    purchaseDate: {
        type: Date, 
        default: Date.now,
    },
    totalCost: {
        type: Number
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Bouquet"
    }]
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;