import * as mongoose from 'mongoose'
//var mongoose = require('mongoose');

var model = mongoose.model('Group', new mongoose.Schema({
  id:             Number,
  name:           String,
  type:           String,
  parent:         String,
  members:        Object,
}));

export default model;
