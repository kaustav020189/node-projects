// This is a custom logger class using the event emit concept of NodeJS
// This class has a method called 'log' which maybe called from anywhere in the application - when we need a logging
// As soon as the log method is called, it emits and event - with the event name and a corresponding custom log message object.
// When this event is emitted, the listener catches the message and prints it

const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg: msg });
  }
}

const logger = new Logger();

logger.on("message", (data) => console.log("Called listener", data));

logger.log("Hello World"); // prints Called listener { id: '1691bcd0-562c-4c46-8961-6e949d335278', msg: 'Hello World' }
