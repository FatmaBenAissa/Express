const express=require("express");
const app=express();
app.set("view engine","ejs");
app.use(express.json());
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));
app.get("/store",(req, res)=>{
    let date=new Date();
    let hours=date.getHours();
    if(hours>16 && hours<18){
        res.render("open")
    }else{
        res.render("close")
    }
})
app.listen(5000, (err)=>err?console.log(err):console.log("server is running"))