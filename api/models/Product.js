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
      required: true,
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
      required: true,
    },
    feature: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      default: "",
      required: true,
    },
    size: {
      type: Array,
      default: "6",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("PRODUCT", productSchema);

module.exports = Product;
