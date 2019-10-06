var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ProductModel = require('../model')


router.post('/',bodyParser.json(), function(req, res, next) {
    if (!req.body) {
        return res.sendStatus(400);
    }

  const query = ProductModel.findByIdAndDelete(req.body._id)
    query.exec((err,doc) => {
      res.sendStatus(200);
    })

    



});

    
module.exports = router;