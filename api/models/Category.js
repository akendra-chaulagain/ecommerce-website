

const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    content: { type: Array }

}, { timestamps: true }
)

const Caregory = mongoose.model("Caregory", CategorySchema)

module.exports = Caregory