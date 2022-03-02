const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter product name"],
        trim: true
    },
    desc: {
        type: String,
        require: [true, "Please enter description name"]
    },
    price: {
        type: String,
        require: [true, "Please enter product price"]
    },
    rating: {
        type: Number,
        default: 0,
        require: [true, "Please enter product name"]
    },
    img: [
        {
            public_id: {
                type: String,
                require: true
            },
            url: {
                type: String,
                require: true
            },
        }
    ],
    category: {
        type: String,
        require: [true, "Please enter product category"]
    },
    stock: {
        type: Number,
        require: [true, "Please enter product stock"],
        default: 1
    },
    comment: {
        type: String,
        require: false
    },

}, { timestamps: true }
)

const Product = mongoose.model("PRODUCT", ProductSchema);

module.exports = Product;