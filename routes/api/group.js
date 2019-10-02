var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbSchema = new Schema({
  id:             Number,
  name:           String,
  type:           String,
  parent:         String
});
var Document = mongoose.model('dbcollection', dbSchema, 'dbcollection');

// insert or update (upsert)
router.post('/',bodyParser.json(), function(req, res, next) {
    let group = new Document(req.body);
    group.save(function(err,group){
      if(err){
        return res.status(400).json(err)
      }
      res.status(200).json(group)
    })
});

//read
router.get('/',bodyParser.json(), function(req, res, next) {
  const query = Document.find(); // `query` is an instance of `Query`
  query.setOptions({ lean : true });
  query.collection(Document.collection);
  query.where('name').equals('sport');
  query.where('type').equals('group');
  query.exec((err,body) => {
    res.send(body)
  });
  });


//delete
router.delete('/',bodyParser.json(), function(req, res, next) {
  let group = new Document(req.body);
  group.save(function(err,group){
    if(err){
      return res.status(400).json(err)
    }
    res.status(200).json(group)
  })
});


module.exports = router;
