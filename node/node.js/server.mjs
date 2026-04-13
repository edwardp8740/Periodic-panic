// // server.mjs
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// // run with `node server.mjs`



// ------------------------------------





// // Here we require in the 'events' module and save a reference to it in an events variable
// let events = require('events');

// let listenerCallback = (data) => {
//     console.log('Celebrate ' + data);
// }

// let myEmitter = new events();  // Event Emitter

// myEmitter.on('celebration', listenerCallback);

// myEmitter.emit('celebration', "wee")