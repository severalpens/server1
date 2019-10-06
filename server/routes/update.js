var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ProductModel = require('../model')


router.post('/', function(req, res, next) {
    if (!req.body) {
        return res.sendStatus(400)
    }
    
    ProductModel.findById(req.body._id, function (err, doc) {
      doc.Name = req.body.Name;
      doc.Description = req.body.Description;
      doc.Price = req.body.Price;
      doc.Units = req.body.Units;
      
      doc.save((err,doc2) => {
          res.send(doc2)
      });
    });
});

    
module.exports = router;