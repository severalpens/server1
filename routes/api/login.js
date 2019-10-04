var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');
var DbCollection = require('../models/dbCollection')

DbCollection.find().collection(DbCollection.collection).where('groupCounter').gte(0).exec((err,body) => {
  groupCounter = body.groupCounter;
});

function processMember(body,req){
  let result = false
  let members = body[0].members;
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
   console.log('login post reached');
    const query = DbCollection.find(); 
    query.setOptions({ lean : true });
    query.collection(DbCollection.collection);
    query.where('name').equals('Chat')
    query.where('type').equals('Site');
    query.exec((err,body) => {
        res.send(processMember(body, req));
    });
});



module.exports = router;
