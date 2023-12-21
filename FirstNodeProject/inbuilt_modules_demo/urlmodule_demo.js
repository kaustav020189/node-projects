const url = require("url");

const myURL = new URL(
  "http://www.mywebsite.com/hello.html?id=100&status=active"
);

// Getting serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Getting the host
console.log(myURL.host);

// Getting hostname
console.log(myURL.hostname); // does not get the PORT

// Serialized query
console.log(myURL.search); // prints ?id=100&status=active

// Params object
console.log(myURL.searchParams); // prints URLSearchParams { 'id' => '100', 'status' => 'active' }
