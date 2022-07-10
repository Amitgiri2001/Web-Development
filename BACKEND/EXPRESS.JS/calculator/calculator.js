const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    res.send("the result is :"+ (num1+num2));
    // console.log(req.body);
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    // __dirname give the current file directory path
});



app.listen(3000,function(){
    console.log("Server started on port 3000.")
})