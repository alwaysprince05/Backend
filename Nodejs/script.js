const fs = require('fs');

// writeFile
// fs.writeFile("hey.txt","hey hello kaise ho",function(err){
//     if(err) console.log(err);
//     else console.log("Done");
// })

// readFile
// fs.appendFile("hey.txt"," mai to acha hu", function(err){
//     if(err) console.log(err);
//     else console.log("Done");
// })

// rename
// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log("Done");
// })

// copyFile
// fs.copyFile("hello.txt","./copy/chacha.txt",function(err){
//     if(err) console.log(err); // or use err.message 
//     else console.log("Done");
// })

// unlink
// fs.unlink("hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// })

// rmdir
fs.rm("./copy",{recursive:true},function(err){
    if(err) console.error(err);
    else console.log("removed");
})
