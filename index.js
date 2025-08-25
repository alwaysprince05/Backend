const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // inki vajah se hm apne form ko use kr pate hai. // in line ki vajah se parsers form ke liye ready hota hai.
app.use(express.static(path.join(__dirname,'public'))); // backend pr koi bhi request aaye hr request ke liye static files hme public folder ke andar milengi.
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index"); // usually hm yha pr extension ka nam nhi likhate bez view engine already ejs setup kiya hai.render vhi view hoga jo hamne setup kiya ho.
});

// ex1) for creating a dynamic route
app.get("/profile/:username",function(req,res){
    res.send(`Welcome, ${req.params.username}`);
})

// ex2) for creating a dynamic route
app.get("/author/:username/:age",function(req,res){
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
})

app.listen(3000,function(){
    console.log("its running");
}) // for running use -> npx nodemon index.js


