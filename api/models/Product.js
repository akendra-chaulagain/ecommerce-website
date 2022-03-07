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
      default: "",
    },
    stock: {
      type: Boolean,
      default: false,
    },
    feature: {
      type: String,
    },
    brand: {
      type: String,
      default: "",
    },
    size: {
      type: "number",
      default:""
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("PRODUCT", productSchema);

module.exports = Product;
