const { Schema, model, default: mongoose } = require("mongoose")

const orderSchema = new mongoose.Schema ({
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
        createdAt: {type: Date, default: Date.now},
        required: true
    },
    totalCost: {
        type: Number,
        required: true,
    }
    
})