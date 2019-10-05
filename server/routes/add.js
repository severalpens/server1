var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var addFunction = require('../../mongoFunctions/add.js')

router.post('/',bodyParser.json(), function(req, res, next) {
    res.send('add post reached')
});

router.get('/',bodyParser.json(), function(req, res, next) {
    res.send('add get reached')
  });


module.exports = router;
