const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const orderSchema = new Schema({
    Id: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        products: [{
            type: Schema.Types.ObjectId,
            ref: "Bouquet"
        }
        ]
    },
    purchaseDate: {
        type: Date, 
        default: Date.now,
    },
    totalCost: {
        type: Number,
        required: true,
    }
    
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;