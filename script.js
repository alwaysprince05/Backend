// Fundamentals of JavaScript
// arrays and objects
// functions return
// async js coding


// we should know for the learning of array -: foreach,map, filter, find, indexOf
var arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val + " hello")
})

// map function -> hm ek nya blank array banate hai mn me hi. Previous array ke length ke brabar
var newarr = arr.map(function(val){
    return 13;
})

console.log(newarr);
// Note -> Map ka use tb hota hai jb hm given array se ek aur nya array banana chahte hai.

// filter function -> jb bhi hm apne array se ek nya array create karte hai to jo nya array banega vo hamare array se chhota ya uske brabar ho skta hai tb filter ka use karte hai.
var ans = arr.filter(function(val){
    if(val > 2){
        return true;
    }
    else return false;
})
console.log(ans);

// find function -> ye function hamesha ek hi value return karta hai. Agar vo value nahi milti to undefined return karta hai.array me koi bhi element exist kr rha hai ya nahi ye check karne ke liye find ka use karte hai.

var ans = arr.find(function(val){
    if(val === 2) return val;
})
console.log(ans)

// indexOf function -> ye function hamesha first index return karta hai. Agar vo value nahi milti to -1 return karta hai.
var ans = arr.indexOf(2);
console.log(ans);


// Objects in a JavaScript -> objects are key-value pairs.
var obj = {
    name: "Prince",
    age:20
}


// obj["name"]
// or
// obj.name
// agar hm chahte hai ki age ki value change na ho to hm freeze ka use kr skte hai
Object.freeze(obj);

obj.age = 25; // see the output on the console

// Note -> hm function ki bhi length nikal skte hai.
// Note -> Inside the functions number of parameters are called length.
function abcd(a,b,c){

}

abcd.length; // 3

// function ke andar koi bhi code likh ke return kra skte hai
function abcd(a,b,c){
    return "Hello World";
}


// async javscript coding
// Note -> Hr baar jaruni nhi hota ki await ka use karne ke liye async ka use krna pde.

async function abcd() {
    var blob = await fetch('https://randomuser.me/api/'); // fetch asynchronous hota hai by nature.
    var ans = await blob.json(); // await ka use kiys because blob jb aayega tb to blob ko json me use karenge.
    console.log(ans.results[0].name);
}

abcd(); // this will work

// var blob = await fetch(`https://randomuser.me/api/`);
// var blob = await blob.json();

// console.log(res); // This will not work in our laptop

// Note -> line by line code chale ise kahte hai synchronous
// jo bhi code async nature ka ho,usey side stack me bhej do and agle code ko chalo jo bhi sync nature ka ho, jb bhi sara sync code chal jaye, tab check kro ki async code complete hua ya nhi and agar vo complete hua ho to use min stack me lao and chala do.



