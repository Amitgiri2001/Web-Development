//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose=require("mongoose")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/TODODB",{useNewUrlParser:true});

const itemSchema=new mongoose.Schema({
  name:String,
});

const Item=new mongoose.model("Item",itemSchema);

const item1=new Item({
  name:"Buy Food"
});

const item2=new Item({
  name:"Get Food"
});
const item3=new Item({
  name:"Eat Food"
});


const itemsArray=[item1,item2,item3];




app.get("/", function(req, res) {
const day = date.getDate();

Item.find(function(err,result){
  if(result.length===0){
    Item.insertMany(itemsArray,function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("Items added successfully")
      }
    });
    res.redirect("/")
  }
  if(err){
    console.log(err);
  }
  else{
    res.render("list", {listTitle: day, newListItems: result});
  }
  
});

  

});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const item=new Item({
    name:itemName,
  });
  item.save();
  res.redirect("/");
});
app.post("/delete",function(req,res){
  console.log(res.body.checkbox)
})

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
