const mongoose = require('mongoose');
const connectionString = process.env.connectionString || 'mongodb://localhost:27017/mydb';
mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
module.exports = db;