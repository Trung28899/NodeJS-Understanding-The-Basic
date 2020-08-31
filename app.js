const http = require("http");
// This is how you import local file
const routes = require("./routes");

console.log(routes.someText);

// This is how you execute it
const server = http.createServer(routes.handler);

server.listen(3000);
