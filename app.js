// importing packages in NodeJS
const http = require("http");
// fs allow use to work with file system
const fileSystem = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input name='message' type='text'><button type='submit'>Send</button></input></form></body>"
    );
    res.write("</html>");
    // By returning res.end, we get out of the function
    // and we don't run the code down below
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    /*
        Registering an event listener
        in this case the data event.

        This data event will be fired whenever a 
        new body parts of data is ready to 
        be read
    */
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    /*
        'end' is when there is enough body parts to form a buffer
        to work with


        If we don't return this function, we'll see the /message page
        loaded when we send any message > this is the case of 
        Event Driven Code Execution
    */
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();

      // See parsedBody to understand this
      const message = parsedBody.split("=")[1];
      fileSystem.writeFile("message.txt", message, (error) => {
        // 302 means redirection
        res.statusCode = 302;
        // set Location of Header to /
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
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
});

// listening for any incoming requests in port 4000
server.listen(4000);
