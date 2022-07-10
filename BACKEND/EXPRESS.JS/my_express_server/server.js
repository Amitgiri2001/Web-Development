// Require express module
const express=require("express");
// initialize app as express
const app=express();

// app.get method

app.get("/",function(req,res){
    res.send("<h1>Hello </h1>")
});

app.get("/about",function(req,res){
    res.send("Contact me: meanik@001");
});

app.get("/contact",function(req,res){
    res.send("Contact us.");
});

// listening on port 3000
app.listen(3000,function(){
    console.log("Server started on port 3000");
});

