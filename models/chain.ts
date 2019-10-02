var mongoose = require('mongoose');

var model = mongoose.model('Chain', new mongoose.Schema({
  id:       Number,
  name:     String,
  type:     String,
  parent:   String,
  members:  Object,
}));

export default model;
