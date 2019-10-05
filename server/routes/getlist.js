var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
  
router.post('/',bodyParser.json(), function(req, res, next) {
  res.send('api-getlist post reached')
});

router.get('/',bodyParser.json(), function(req, res, next) {
  res.send('api-getlist get reached')
});

    
        module.exports = router;