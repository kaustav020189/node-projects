// File System Module (most methods as async (has a callback) but there are sync versions - which waits for the file task to complete)

const fs = require("fs");
const path = require("path");

// Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created");
});
