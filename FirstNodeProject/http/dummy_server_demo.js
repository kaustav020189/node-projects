const http = require("http");
const fs = require("fs");
const path = require("path");

class DummyServer {
  constructor(port) {
    this.port = process.env.PORT || port;
  }

  myServer = () => {
    let server = http.createServer((req, res) => {
      if (req.url === "/") {
        fs.readFile(
          path.join(__dirname, "..", "public", "index.html"),
          (err, content) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text-html" });
            res.end(content);
          }
        );
      }
      if (req.url === "/about") {
        fs.readFile(
          path.join(__dirname, "..", "public", "about.html"),
          (err, content) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text-html" });
            res.end(content);
          }
        );
      }
      if (req.url === "/api/users") {
        const users = [
          { name: "Kaustav", age: 34 },
          { name: "Shrestha", age: 34 },
          { name: "Thor", age: 99 },
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
      }
    });

    server.listen(this.port, () =>
      console.log(`Server running on port : ${this.port}`)
    );
  };
}

module.exports = DummyServer;
