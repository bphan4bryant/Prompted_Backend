const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = 3001;

app.get('/', (req, res) => {
  res.send("Hello");
});

io.on('connection', (socket) => {
    console.log("User Connected");
  });

server.listen(port, () => {
  console.log('server running at http://localhost:' + port);
});
