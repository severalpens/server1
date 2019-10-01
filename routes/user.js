var User = require('../models/userModel');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');

// post create user
// post update user
// post delete user
// get user

router.post('/register',bodyParser.json(), function(req, res, next) {
    let user = new User(req.body);
    user.save(function(err,user){
      if(err){
        user.valid = false;
      //  return res.status(400).json(err)
      }
        res.send(user);
      //res.status(200).json(user)
    })
});

router.get('/namecheck',bodyParser.urlencoded({ extended: false }),(req,res) => {
  User.findOne({username: req.body.username},
   (err,user) => {
     if(user == null){
       console.log('user == null');
       res.send(true);
     }else{
       console.log(user);
       res.send(false);
     }
   })
 })

 router.post('/login',bodyParser.json(),(req,res) => {
  User.findOne({username: req.body.username, password: req.body.password},
   (err,user) => {
     if(user == null){
       console.log('user == null');
       res.send({username: '', password: '', valid: false});
     }else{
       console.log(user);
       res.send(user);
     }
   })
 })
 module.exports = router;
