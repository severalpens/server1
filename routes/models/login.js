var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mongoose = require('mongoose');



var Schema = mongoose.Schema;

var loginSchema = new Schema({
    id:       Number,
    name:     String,
    type:     String,
    parent:   String,
    members:  Array,
});

var loginModel = mongoose.model('dbcollection', loginSchema, 'dbcollection');


module.exports = loginModel;


