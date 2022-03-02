const express = require('express')
const app = express();



// dotenv package is used to secure the importance file  (config)
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })

// port number
const PORT = process.env.PORT;



// routers
const authRoutes = require("./routes/auth")
const productRoutes = require("./routes/products")

// routers are used
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/products", productRoutes)



app.get("/", (req, res) => {
    res.send("Hello from app.js")
})


app.listen(PORT, () => {
    console.log(`listening in port no :${PORT}`);
})