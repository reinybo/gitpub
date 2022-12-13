const express = require('express');
const drinks = require("./models/drinks.js")
const app = express();

const port = 3000;

app.get("/", function(req, res){
    res.send('Welcome to the Gitpub App!')
})

app.get("/drinks", function(req, res){
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    });
})

app.get("/drinks/:id", function(req, res){
    res.render("drinks_show.ejs", {
        drink: drinks[req.params.id],
    });
})


app.listen(3000, function(){
    console.log("server.js listening on port 3000");
})
