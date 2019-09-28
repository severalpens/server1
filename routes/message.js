var Chain = require('../models/chainModel');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');

//read
router.get('/',bodyParser.json(), function(req, res, next) {
    
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
