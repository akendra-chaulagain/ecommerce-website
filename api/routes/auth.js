const express = require("express")
const router = express.Router()


// database
require("../connection/DB")


router.get("/", (req, res) => {
    res.send("hello from router")
})


module.exports = router;