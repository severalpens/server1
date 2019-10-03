var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
  id:       Number,
  name:     String,
  type:     String,
  parent:   String,
  members:  Object,
});

var MongooseModel = mongoose.model('dbcollection', dbSchema, 'dbcollection');

MongooseModel.find().collection(MongooseModel.collection).where('groupCounter').gte(0).exec((err,body) => {
  groupCounter = body.groupCounter;
});

function processMember(body,req){
  let result = false
  let members = body.members;
  members.forEach(member => {
    let tmp = member.split(':');
    if(tmp[0] == req.body.username && tmp[1] == req.body.password){
      result = true;
    }
  });
  return result;
}
// insert or update (upsert)
router.post('/',bodyParser.json(), function(req, res, next) {
   // let users = {admin: 'admin1', super: 'super1'};
    const query = mongooseModel.find(); 
    query.setOptions({ lean : true });
    query.collection(mongooseModel.collection);
    query.where('name').equals('chat')
    query.where('type').equals('site');
    query.exec((err,body) => {
        res.send(processMember(body, req));
    });
});



module.exports = router;
