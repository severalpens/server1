var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mongoose = require('mongoose');
var groupCounter = 0;
var Schema = mongoose.Schema;

var productSchema = new Schema({
  Id:             Number,
  Name:           String,
  Description:    String,
  Price:          Number,
  Units:          Number
});

var ProductModel = mongoose.model('product', productSchema, 'product');


module.exports = ProductModel;
