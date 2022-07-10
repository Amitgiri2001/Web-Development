const express=require("express");
const bodyParser=require("body-parser")

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
    let weight=parseFloat(req.body.weight);
    let height=parseFloat(req.body.height);
    let ans=weight/(height*height);
    res.send("Your Bmi is: " +Math.floor(ans))
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.listen(3000,function(){
console.log("Server started on port 3000.")
});