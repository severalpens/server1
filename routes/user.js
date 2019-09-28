var User = require('../models/userModel');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');

router.post('/user',bodyParser.json(), function(req, res, next) {
    let user = new User(req.body);
    user.save(function(err,user){
      if(err){
        return res.status(400).json(err)
      }
      res.status(200).json(user)
    })
});

router.get('/',(req,res) => {
  res.send("You've reached /api/user!")
})


module.exports = router;
