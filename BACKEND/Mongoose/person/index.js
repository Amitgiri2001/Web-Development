
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/PersonDB",{useNewUrlParser:true});

const personSchema=new mongoose.Schema({
name:String,
age:Number
});

const Person=new mongoose.model("Person",personSchema);
//mongo db takes this input and create plural from of person and create people collection


const ketty= new Person({
    name:"ketty",
    age:5
});
//sae this data into the collection
ketty.save();