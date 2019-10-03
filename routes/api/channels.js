var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mongoose = require('mongoose');
var Channel = mongoose.model('Group', new mongoose.Schema({
  id:             Number,
  name:           String,
  type:           String,
  parent:         String,
  members:        Object,
}));

//read
router.get('/',bodyParser.json(), function(req, res, next) {
  const query = Channel.find(); // `query` is an instance of `Query`
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
    let channel = new Channel(req.body);
    channel.save(function(err,channel){
      if(err){
        return res.status(400).json(err)
      }
      res.status(200).json(channel)
    })
});

//delete
router.delete('/',bodyParser.json(), function(req, res, next) {
  let channel = new Channel(req.body);
  channel.save(function(err,channel){
    if(err){
      return res.status(400).json(err)
    }
    res.status(200).json(channel)
  })
});


module.exports = router;
