const express=require("express");
const productRouter=express.Router();

//add products



//get all products

productRouter.get("/home",(req, res)=>res.send("hiiiiii product "))

// get product by id


//delete product



//update product

module.exports=productRouter;