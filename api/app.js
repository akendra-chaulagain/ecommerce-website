const express = require('express')
const app = express();



// dotenv package is used to secure the importance file
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })




const PORT = process.env.PORT;



// routes import from routes


// routers
const authRoutes = require("./routes/auth")

// routers are used
app.use("/api/auth", authRoutes)



app.get("/", (req, res) => {
    res.send("Hello from app.js")
})


app.listen(PORT, () => {
    console.log(`listening in port no :${PORT}`);
})