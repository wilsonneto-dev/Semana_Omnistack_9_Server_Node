const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(
  'mongodb+srv://tindev:tindev@cluster0-o37eq.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const connectedUsers = {};

io.on('connection', socket => {
  const { user_id } = socket.handshake.query;
  connectedUsers[user_id] = socket.id;
  console.log(`user conectado - sockect:${socket.id} user: ${user_id}`);
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;
  return next();
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static('uploads'));
app.use(routes);

server.listen(3333);
