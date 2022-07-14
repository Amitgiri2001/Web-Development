const express = require("express")
const bodyParser = require("body-parser")
const date=require(__dirname+"/date")
console.log(date.getDate());

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.use(express.static("public"))

let items = ["Buy" , "Get" ,"Eat"];
let workItems = ["Buy" ,"food"];
let typeOfDay="";


app.get("/", function (req, res) {
typeOfDay=date.getDate();
    res.render("lists", { day: typeOfDay ,newItem:items})
});

app.get("/work",function(req,res){
    typeOfDay="Work"
    res.render("work",{day:typeOfDay , newItem:workItems})
});
app.post("/work",function(req,res){
    let item=req.body.inputItem;
    workItems.push(item);
    
    res.redirect("/work")
})
app.post("/", function (req, res) {
    console.log(req.body.inputItem);
    let item = req.body.inputItem;
    items.push(item);
    // redirect to home route for fetch the data and show them
    res.redirect("/")
});



app.listen(3000, function () {
    console.log("app started successfully in port 3000.")
})