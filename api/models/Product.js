const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: Array,
      required: true,
    },
    stock: {
      type: Boolean,
      default: true,
    },
    feature: {
      type: String,
    },
    cat: {
      type: Array,
    },
    brand: {
      type: String,
      default: "",
    },
    size: {
      type: Array,
      default: "6",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("PRODUCT", productSchema);

module.exports = Product;
