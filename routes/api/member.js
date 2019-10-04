var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mongoose = require('mongoose');
var DbCollection = require('../models/dbCollection')


//read
router.get('/',bodyParser.json(), function(req, res, next) {
  const query = DbCollection.find(); // `query` is an instance of `Query`
  query.setOptions({ lean : true });
  query.collection(DbCollection.collection);
  query.where('type').equals('Member');
  query.where('parent').equals('Chat');
  query.exec((err,body) => {
    res.send(body)
  });
  });

// insert or update (upsert)
router.post('/',bodyParser.json(), function(req, res, next) {
    let chain = new DbCollection(req.body);
    chain.save(function(err,chain){
      if(err){
        return res.status(400).json(err)
      }
      res.status(200).json(chain)
    })
});

//delete
router.delete('/',bodyParser.json(), function(req, res, next) {
  let chain = new DbCollection(req.body);
  chain.save(function(err,chain){
    if(err){
      return res.status(400).json(err)
    }
    res.status(200).json(chain)
  })
});


module.exports = router;
