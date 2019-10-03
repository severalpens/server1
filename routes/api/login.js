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

var mongooseModel = mongoose.model('dbcollection', dbSchema, 'dbcollection');

// insert or update (upsert)
router.post('/',bodyParser.json(), function(req, res, next) {
    let users = {admin: 'admin1', super: 'super1'};
    if(users[req.body.username] == req.body.password){
        res.send(true);
    }


    // const query = mongooseModel.find(); // `query` is an instance of `Query`
    // query.setOptions({ lean : true });
    // query.collection(mongooseModel.collection);
    // query.where('name').
    // query.where('type').equals('group');
    // query.exec((err,body) => {
    //   res.send(body)
    // });
});

//delete
router.delete('/',bodyParser.json(), function(req, res, next) {
  let chain = new mongooseModel(req.body);
  chain.save(function(err,chain){
    if(err){
      return res.status(400).json(err)
    }
    res.status(200).json(chain)
  })
});


module.exports = router;
