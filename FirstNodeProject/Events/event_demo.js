const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new EventEmitter();

// Event Listener
myEmitter.on("anyeventname", () => console.log("Event fired"));

// Init event
myEmitter.emit("anyeventname"); // prints 'Event fired'
myEmitter.emit("anyeventname"); // prints 'Event fired'
myEmitter.emit("anyeventname"); // prints 'Event fired'
