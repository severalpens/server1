var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
  var ProductModel = require('../model')
router.post('/',bodyParser.json(), function(req, res, next) {
  res.send('api-getlist post reached')
});

router.get('/',bodyParser.json(), function(req, res, next) {
  const query = ProductModel.find();
  query.setOptions({ lean : true });
  query.collection(ProductModel.collection);
  query.exec((err,body) => {
    res.send(body)
  });
  });

    
        module.exports = router;