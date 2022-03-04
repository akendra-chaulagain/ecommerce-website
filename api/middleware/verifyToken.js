const jwt = require("jsonwebtoken")


// user model import from models/User
const User = require("../models/User")

const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.jwtToken;
        if (!token) {
            res.status(401).json("You are not authenticated!")
        } else {
            verifyUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const user = await User.findOne({ _id: verifyUser._id })
            req.user = user;
            req.token = token;
            next();
        }

    } catch (error) {
        res.status(401).json("verifyToken error from middleware" + error)
    }
}

module.exports = verifyToken;