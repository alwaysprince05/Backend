// const express = require('express');
// const app = express();

// app.get("/",function(req,res){
//     res.send("champions mera anuj");
// })

// app.get("/profile",function(req,res){
//     res.send("champion uska coach");
// })

// app.listen(3000);
// above is the concept of the express


// Now understanding the concept of the middleware
const express = require('express');
const app = express();

// usually middleware ko lagane ke 2 ways hai.
// app.use(); // means app.get server pr jitni bhi req aayengi usse phle app.use ka use hoga req lene k liye.
app.use(function(req,res,next){
    console.log('middleware chala');
    next();
});

app.use(function(req,res,next){
    console.log('middleware chala ek aur baar');
    next(); // ye dekhega ki koi middleware baki nhi hai to iske baad se sidha route pr jayega and route ke acc chalega. ex-/about page. ye phle "/" wale ko skip karega  app.get mtlb agar vhi route hai tb chalao & app.use mtlb baar - baar chalana hai.
});

app.get("/",function(req,res){
    res.send("champion mera anuj"); // means is time browser se directly server pr request gyi hogi and server ne jb request accept kri hogi to ye directly "/" pr pahuch gyi hogi.and server se res gya champion mera anuj 
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