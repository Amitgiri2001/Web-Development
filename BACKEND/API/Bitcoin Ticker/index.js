const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (req, result) {
    const first = req.body.crypto;
    const second = req.body.local;
    // console.log(first);
    // console.log(second);
    // res.send(first);
    let base = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";

    let final = base + first + second;
    request(final, function (err, res, body) {
        // console.log(res.statusCode);
        // console.log(body)
        // result.send(body);

        const obj = JSON.parse(body);
        console.log( obj.last);
        console.log(obj.averages.week);
    });
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log("Server running on port 3000.");
});