const express = require('express')
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())


// cooki-parser for json webtoken
const cookieparser = require("cookie-parser")
app.use(cookieparser())



// dotenv package is used to secure the importance file  (config)
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })

// port number
const PORT = process.env.PORT;



// routers
const authRoutes = require("./routes/auth")
const productRoutes = require("./routes/products")
const userRoutes = require("./routes/users")
const cartRoutes = require("./routes/cart")
const orderRoutes = require("./routes/orders")
const categoryRoutes = require("./routes/category")
const stripeRoutes = require("./routes/stripe");



// routers are used (middleware)
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/products", productRoutes)
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/orders", orderRoutes)
app.use("/api/v1/carts", cartRoutes)
app.use("/api/v1/categories", categoryRoutes)
app.use("/api/v1/stripe", stripeRoutes);





app.listen(PORT, () => {
    console.log(`listening in port no :${PORT}`);
})