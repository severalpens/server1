import * as mongoose from 'mongoose'
//var mongoose = require('mongoose');


var model = mongoose.model('Member', new mongoose.Schema({
  id:           Number,
  type:         String,
  parent:       String,
  members:      Object,
  username:     String,
  name:         String,
  email:        String,
  birthdate:    String,
  age:          String,
  password:     String,
  valid:        Boolean
}));

export default model;

