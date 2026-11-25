const express=require("express");
const userlist = require("../users");
const userRouter=express.Router();

//add users
userRouter.post("/login", (req, res)=>{
    let email=req.body.email;
    let password=req.body.password;
    res.send(`My email is ${email} and my password is ${password}`)
})


//get all users

userRouter.get("/home",(req, res)=>res.send("hiiiiii "));
userRouter.get("/list", (req, res)=>res.send({users:userlist}))



// get user by id


//delete user



//update user

module.exports=userRouter;