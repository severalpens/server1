var Chain = require('../models/chainModel');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');

router.post('/',bodyParser.json(), function(req, res, next) {
    let chain = new Chain(req.body);
    chain.save(function(err,chain){
      if(err){
        return res.status(400).json(err)
      }
      res.status(200).json(chain)
    })
});

router.get('/',(req,res) => {
  res.send("You've reached /api/chain!")
})

module.exports = router;
