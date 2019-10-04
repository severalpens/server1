var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mongoose = require('mongoose');
var groupCounter = 0;
var Schema = mongoose.Schema;

var dbSchema = new Schema({
  id:             Number,
  name:           String,
  type:           String,
  parent:         String,
  members:        Array
});

var DbCollection = mongoose.model('dbcollection', dbSchema, 'dbcollection');


module.exports = DbCollection;
