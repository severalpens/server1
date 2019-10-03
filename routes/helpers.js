var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbSchema = new Schema({
    counter:   Number
});
var Mongo = mongoose.model('dbcollection', dbSchema, 'dbcollection');
var counter = 0;

const getCounter = () => {
    //get counter
   var result =  Mongo.find().collection(Mongo.collection).query.where('counter').gte(0).exec((err,body) => {
      return body;
    });
    return result;
}
