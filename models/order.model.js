import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema]
    },  
    address: addressSchema,
    status: {
        type: String,
        enum: ["PENDING, CANCELLED, DELIVERED"],
        default: "PENDING"
    }
}, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema)