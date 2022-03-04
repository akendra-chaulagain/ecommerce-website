const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")


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
    profilePic: {
        type: String,
        default: ""
    },

    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true

    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
}, { timestamps: true })




// creating jwt token  when register
userSchema.methods.generateToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET_KEY)
        this.tokens = this.tokens.concat({ token })
        await this.save();
        return token;
    } catch (error) {
        console.log(`token error `+ error);
    }
}

const User = mongoose.model("User", userSchema);


module.exports = User;