const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.post("/", function (req, res) {
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
    console.log(fname,lname,email);
    
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function () {
    console.log("Server running on port 3000.");
});


//41a6cd2f563172d4e20acf65b3c50ae9-us13