//import * as mongoose from 'mongoose'
var mongoose = require('mongoose');


var model = mongoose.model('Product', new mongoose.Schema({
  id:             Number,
  Name:           String,
  Description:    String,
  Price:          Number,
  Units:          Number
}));

export default model;
