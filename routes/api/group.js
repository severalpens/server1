var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var mongoose = require('mongoose');
var groupCounter = 0;



var Schema = mongoose.Schema;

var dbSchema = new Schema({
  id:             Number,
  name:           String,
  type:           String,
  parent:         String,
  members:        Array
});

var MongooseModel = mongoose.model('dbcollection', dbSchema, 'dbcollection');

MongooseModel.find().collection(MongooseModel.collection).where('groupCounter').gte(0).exec((err,body) => {
  groupCounter = body.groupCounter;
});

// insert or update (upsert)
router.post('/',bodyParser.json(), function(req, res, next) {
  console.log(req.body);
    let group = new MongooseModel(req.body);
    group.save(function(err,group){
      if(err){
        return res.status(400).json(err)
      }
        res.status(200).json(group)
    })
});

//read
router.get('/',bodyParser.json(), function(req, res, next) {
  const query = MongooseModel.find(); // `query` is an instance of `Query`
  query.setOptions({ lean : true });
  query.collection(MongooseModel.collection);
  query.where('name').equals('sport');
  query.where('type').equals('group');
  query.exec((err,body) => {
    res.send(body)
  });
  });

  //get Counter
router.get('/counter',bodyParser.json(), function(req, res, next) {
  const query = MongooseModel.find(); // `query` is an instance of `Query`
  query.setOptions({ lean : true });
  query.collection(MongooseModel.collection);
  query.where('groupCounter').gte(0);
  query.exec((err,body) => {
    res.send(body)
  });
  });

  // update counter
// insert or update (upsert)
router.post('/counter',bodyParser.json(), function(req, res, next) {
  var myquery = { name: "counters" };
  var newvalues = { $set: {name: "counters", groupCounter: 33 } };
  var result =   MongooseModel.updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
        return res
    });
 res.send(true)
});
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("db");
//   var myquery = { name: "counters" };
//   var newvalues = { $set: {name: "counters", groupCounter: 34 } };
//   dbo.collection("dbcollection").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
   
//   });


  
  //req.newData.name = req.user.username;
 //var result =  MongooseModel.findOneAndUpdate({ 'groupCounter': 1 }, { $set: { 'groupCounter': 32 }}).exec();
//   MongooseModel.findOneAndUpdate({ 'groupCounter': 1 }, { $set: { 'groupCounter': 32 }}, {useFindAndModify:true}, function(err, doc){
//   if (err) return res.send(500, { error: err });
//   return res.send(doc);
// });


//delete
router.delete('/',bodyParser.json(), function(req, res, next) {
  let group = new MongooseModel(req.body);
  group.save(function(err,group){
    if(err){
      return res.status(400).json(err)
    }
    res.status(200).json(group)
  })
});


module.exports = router;
