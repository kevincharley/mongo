var mongoose=require('mongoose')
var eschema=mongoose.Schema;
var empschema=new eschema({
    eid:String,
    name:{type:String ,required:true},
    salary:Number,
   
})
var empmodel=mongoose.model("employee",empschema);
module.exports=empmodel