const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;



const userRoute = require("./routes/users");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");


//connection to database
require("dotenv").config();
require("./config/database.js");


//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 

// routers redirections 
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(port, function () {
  console.log("Express is running");
});
