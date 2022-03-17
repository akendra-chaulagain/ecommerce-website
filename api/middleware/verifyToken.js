const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(401).json("Token is not valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};
module.exports = verifyToken;

// user model import from models/User (by thapa)
// const User = require("../models/User");

// const verifyToken = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwtToken;
//     if (!token) {
//       res.status(401).json("You are not authenticated!");
//     } else {
//       verifyUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
//       const user = await User.findOne({ _id: verifyUser._id });
//       req.user = user;
//       req.token = token;
//       next();
//     }
//   } catch (error) {
//     res.status(401).json("verifyToken error from middleware" + error);
//   }
// };

// module.exports = verifyToken;
