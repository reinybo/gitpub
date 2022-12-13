const express = require('express');
const drinks = require("./models/drinks.js")
const food = require("./models/food.js")

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

app.get("/foods", function(req, res) {
    res.render("food_index.ejs", {
        allFoods: food,
    })
})

app.get("/foods/:id", function(req, res){
    res.render("food_show.ejs", {
        food: food[req.params.id],
    });
})


app.listen(3000, function(){
    console.log("server.js listening on port 3000");
})
