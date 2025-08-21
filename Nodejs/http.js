const http = require('http');

const server = http.createServer(function(req,res){
    res.end("Hello, World!")
})

server.listen(3000); // abhi tk hamne server create kr ke dekha hai.(and server ko browser pe chalana sikha hai)
