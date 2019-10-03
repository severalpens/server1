const express = require('express')
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./Socket.js.js');
const server = require('./listen.js.js');

//Define port used for the server
const PORT = 3001;

//Apply express middleware
app.use(cors());
app.get('/',(req,res) => {
  res.send('server running')
})
//setup Socket
sockets.connect(io,PORT)

//Start server listening for requests.
server.listen(http,PORT);
