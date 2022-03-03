const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: "6"
    },
    cpassword: {
        type: String,
        minlength: "6"

    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema);

module.exports = User;