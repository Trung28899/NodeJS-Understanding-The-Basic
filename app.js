/* 
    This is how you import in NodeJS
    this will import global module called 'http'

    If we have a local file called http.js, we can
    do require(./http)
*/
const http = require("http");

/*
    This is how to create a server, 
    function passed inside createServer() 
    will executed for any coming request
*/
const server = http.createServer(() => {
  console.log(req);
});

/*
    Listen for any incoming requests in port 3000
    Now when user go to localhost:3000 we'll see
    a return object for the server
*/
server.listen(3000);
