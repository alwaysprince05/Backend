const express = require('express');
const app = express();

// Now hm yha ek middleware use karne wale hai.
app.use(express.json()); // agar hm baad me framwork use krenge to hm apna data json form me bhej rhe honge.
app.use(express.urlencoded({extended: true})) // jb hm EJS or pure form ko hi submit karenge to tb fir hm is line ka use karenge. Taki hm form ka data bhi checkout kr paye.

app.get("/",function(req,res){
    res.send("champion mera anuj"); 
});

app.get("/about",function(req,res){
    res.send("about page hai ye");
});

// error handling
app.get("/profile",function(req,res,next){
    return next(new Error("something went wrong"));// display on the console
});

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("Something went wrong we don't have any idea");// display on the browser
})

app.listen(3000); 