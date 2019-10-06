var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ProductModel = require('../model')


router.post('/', function(req, res, next) {
    if (!req.body) {
        return res.sendStatus(400)
    }
    ProductModel(req.body).save((err,doc) => {
      res.send(doc);
    });
    
});

    
module.exports = router;