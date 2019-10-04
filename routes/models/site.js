var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mongoose = require('mongoose');



var Schema = mongoose.Schema;

var siteSchema = new Schema({
    id:       Number,
    name:     String,
    type:     String,
    parent:   String,
    members:  Array,
});

var SiteModel = mongoose.model('Site', siteSchema, 'dbcollection');


module.exports = SiteModel;


