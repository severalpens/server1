var models = require('../../client1/src/app/models/models.ts')
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var group = require('../models/chainModel')
var mongoose = require('mongoose');


var site = mongoose.model('Site', new mongoose.Schema({
  id:       Number,
  name:     String,
  type:     String,
  parent:   String,
  members:  Object,
}));


//read
router.get('/',bodyParser.json(), function(req, res, next) {
  const query = Chain.find(); // `query` is an instance of `Query`
  query.setOptions({ lean : true });
  query.collection(Chain.collection);
  query.where('name').equals('sport');
  query.where('type').equals('group');
  query.exec((err,body) => {
    res.send(body)
  });
  });
// insert or update (upsert)
router.post('/',bodyParser.json(), function(req, res, next) {
    let chain = new Chain(req.body);
    chain.save(function(err,chain){
      if(err){
        return res.status(400).json(err)
      }
      res.status(200).json(chain)
    })
});

//delete
router.delete('/',bodyParser.json(), function(req, res, next) {
  let chain = new Chain(req.body);
  chain.save(function(err,chain){
    if(err){
      return res.status(400).json(err)
    }
    res.status(200).json(chain)
  })
});


module.exports = router;
