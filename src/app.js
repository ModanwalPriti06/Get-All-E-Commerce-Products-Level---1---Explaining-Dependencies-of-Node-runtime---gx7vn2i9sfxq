const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

app.get("/api/v1/products",(req,res)=>{
  res.status(200).json({
    status;"success",
    message:"Product fetched successfully",
    data:{
  products,
  },
});
});
// Write GET endpoint for sending all the products to client here
// Endpoint - /api/v1/products

module.exports = app;
