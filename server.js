const express = require('express');
const drinks = require("./models/drinks.js")
const app = express();

const port = 3000;

app.get("/", function(req, res){
    res.send('Welcome to the Gitpub App!')
})

app.get("/drinks", function(req, res){
    res.render("drinks_index.ejs");
})




app.listen(3000, function(){
    console.log("server.js listening on port 3000");
})
