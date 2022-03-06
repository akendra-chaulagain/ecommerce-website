

const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    img: { type: String, default: "" },
    content: { type: Array },
    category: { type: String }

}, { timestamps: true }
)

const Caregory = mongoose.model("Caregory", CategorySchema)

module.exports = Caregory