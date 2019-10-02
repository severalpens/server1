import * as mongoose from 'mongoose'
//var mongoose = require('mongoose');

var model = mongoose.model('Channel', new mongoose.Schema({
  id:         Number,
  name:       String,
  type:       String,
  parent:     String,
  members:    Object,
  messages:    []
}));

export default model;
