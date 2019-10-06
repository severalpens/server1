// require('dotenv').config()
// var server = require('../app');
// const mongoose = require('mongoose');
// const connectionString = process.env.connectionString || 'mongodb://localhost:27017/mydb';
// var port = process.env.PORT || 3000;
// mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection;
// db.on('error',console.error.bind(console, 'connection error:'))
// db.once('open', function () {
//   console.log('Connected to MongoDB');
//   server.listen(port);
//   console.log(`http://localhost:${port}`);
// })

var server = require('./app.js')
var mongooseAndExpressConnections = require('../index')
var port = process.env.PORT || 3000;
mongooseAndExpressConnections.connect();

