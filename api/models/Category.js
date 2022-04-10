const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String, default: "" },
    cat: { type: String },
  },
  { timestamps: true }
);

const Caregory = mongoose.model("Caregory", CategorySchema);

module.exports = Caregory;
