const mongoose = require("mongoose");

// connected to dabase
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(`Database error  ${error}`);
  });
