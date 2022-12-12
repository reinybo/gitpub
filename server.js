const express = require('express');

const app = express();

const port = 3000;

app.get("/", function(req, res){
    res.send('Welcome to the Gitpub App!')
})



app.listen(3000, function(){
    console.log("server.js listening on port 3000");
})
