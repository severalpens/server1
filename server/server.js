require('dotenv').config()
var server = require('../app');
var db = require('../db');
var port = process.env.PORT || 3000;

db.on('error',console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to MongoDB');
  server.listen(port);
  console.log(`http://localhost:${port}`);
})


