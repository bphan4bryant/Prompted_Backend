const utils = require('./utils.js')

const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server, Namespace } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = 3001;

let users = [];
let usernames = [];
let gallery = [];
let sids = [];
let count = 0;

app.get('/', (req, res) => {
  res.send("Hello");
});

// app.get('/promptImage', (req, res) => {
//   let path = utils.getPromptImagePath();
//   console.log(path);
//   res.sendFile(path);
// });

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('joinGame', (name) => {
    let newUser = {
      username : name,
      sid : socket.id,
      prompt : null,
      imageurl : null,
      points : 0
    };

    users.push(newUser);
    usernames.push(name)
    sids.push(socket.id);

    for (let i=0; i<sids.length; i++) {
      io.to(sids[i]).emit("join_accepted", users.length, usernames);
    }

    // io.to(socket.id).emit("joinGame");
  });

    socket.on('gameStart', () => {
      let image_idx = utils.pickRandomImage();
      for (let i=0; i<sids.length; i++) {
        io.to(sids[i]).emit("game_started", image_idx);
      }
    });

  socket.on('sendImage', (img_url) => { // Get the url to the image?
    count+=1;
    // let userObj = utils.findUser(users, username);
    // userObj.prompt = p;

    // data = utils.generateImage(p);
    // data = p;
    // console.log(data);

    gallery.push(img_url)

    if(count == users.length) {
      count = 0;
      for (let i=0; i<sids.length; i++) {
        io.to(sids[i]).emit("images_grabbed", gallery);
      }
    }
  });

  socket.on('submitVote', (username) => {
    count+=1;
    let userObj = utils.findUser(users, username);
    userObj.points+=1;

    if (count == users.length) {
      count = 0;
      socket.emit("winner")
    }``
  });


});

server.listen(port, () => {
  console.log('server running at http://localhost:' + port);
});

