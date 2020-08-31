const fileSystem = require("fs");

const requestHandler = (req, res) => {
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

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();

      const message = parsedBody.split("=")[1];
      fileSystem.writeFile("message.txt", message, (error) => {
        res.statusCode = 302;

        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head><title>My First Page Dawg</title></head>");
  res.write("<body><h1>Hello from Node Server dawg</h1></body>");
  res.write("</html>");

  res.end();
};

// This is 1st of doing it
// module.exports = requestHandler;

// Here is the 2nd way of doing it:
// module.exports = {
//   handler: requestHandler,
//   someText: "Some Text Here Dawg !!",
// };

// Other ways of exporting:
exports.handler = requestHandler;
exports.someText = "Some Text Here Dawg !!";
