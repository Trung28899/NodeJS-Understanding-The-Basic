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
const server = http.createServer((req, res) => {
  // getting some request information
  console.log(req.url, req.method, req.headers);

  // Setting the header of the response
  res.setHeader("Content-Type", "text/html");
  // writing the content of response
  // In this case, we're writing the whole html page
  res.write("<html>");
  res.write("<head><title>My First Page Dawg</title></head>");
  res.write("<body><h1>Hello from Node Server dawg</h1></body>");
  res.write("</html>");
  // Has to write this to end the process
  res.end();

  // NOW IF YOU RUN THE SERVER, AND RELOAD localhost:4000
  // , YOU WILL SEE THE RESPONSE PAGE
});

/*
    Listen for any incoming requests in port 3000
    Now when user go to localhost:3000 we'll see
    the return of the function inside .createServer()
*/
server.listen(4000);
