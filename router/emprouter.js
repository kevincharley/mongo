var express=require('express')
var mongoose=require('mongoose')
var url="mongodb://localhost/mydb1";
var bodyparser=require('body-parser')

var emp=require('../model/empl')
mongoose.connect(url,function(err){
    if(err) throw err
    else{
        console.log("db connected")
    }
})
const router=express.Router();
module.exports=router;
router.use(bodyparser.urlencoded({extended:true}))
router.get("/",function(req,res){
    res.render('employee');
})
router.get("/new",function(req,res){
    res.render('employee');
   //res.send("details")
})
   router.post("/add",function(req,res){
       var e1=new emp()
       e1.eid=req.body.eidn;
       e1.name=req.body.empn;
       e1.salary=req.body.sal;
       e1.save(function(err){
           if(err) throw err
        else{
            res.send("data added")
        }
       })


   })
   router.get("/view",function(req,res){
       emp.find({},function(err,result){
if(err) throw err
else{
    res.render('viewemp',{emps:result})
}
       })
   })