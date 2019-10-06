const mongoose = require('mongoose');
require('dotenv').config()
var server = require('./app.js')
const connectionString =  'mongodb://localhost:27017/mydb';
var port = process.env.PORT || 3000;


function connect() {
    if(process.env.NODE_ENV === 'test'){
        return new Promise((resolve,reject) => {

            const Mockgoose = require('mockgoose').Mockgoose;
            const mockgoose = new Mockgoose(mongoose);

            mockgoose.prepareStorage()
            .then(() => {
                mongoose.connect(connectionString,
                    {useNewUrlParser: true, useUnifiedTopology: true })
               .then((res,err) => {
                   if (err) return reject(err);
                   resolve();
               })
               resolve();
            })
        })

        }else{
            mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true })
                const db = mongoose.connection;
                db.on('error',console.error.bind(console, 'connection error:'))
                db.once('open', function () {
                  server.listen(port);
                  console.log(`http://localhost:${port}`);
                })

        }

}


function close() {
    return mongoose.disconnect();
}

module.exports = { connect, close };