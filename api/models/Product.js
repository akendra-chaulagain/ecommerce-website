const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: "0"
    },
    category: {
        type: Array,
        required: true,
    },
    stock: {
        type: Boolean,
        default: true
    },
    comment: {
        type: String,
        required:false
    },
}, { timestamps: true })

const Product = mongoose.model("PRODUCT", productSchema);

module.exports = Product;