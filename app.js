var express=require('express')
const app=express();
app.set("view engine","ejs")
app.set("views","./src/views")
var emprouter=require("./router/emprouter")


app.use("/emp",emprouter)
app.listen(8000,function(req,res){
console.log("server 8000 init")})
app.get("/",function(req,res){
    res.render('home')
})