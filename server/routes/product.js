var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var ProductModel = require("../model");

router.get("/one", function(req, res, next) {
  if (!req.body) {
    return res.sendStatus(400);
  }

  ProductModel.findById(req.query._id, (err, body) => {
    res.send(body);
  });
});

router.get("/all", function(req, res, next) {
    if (!req.body) {
      return res.sendStatus(400);
    }
  
    ProductModel.find((err, body) => {
      res.send(body);
    });
  });

router.post("/add", bodyParser.json(), function(req, res, next) {
  // Create an instance of model SomeModel
  var product_instance = new ProductModel(req.body);

  // Save the new model instance, passing a callback
  product_instance.save(function(err) {
    if (err) return handleError(err);
    // saved!
  });
});


router.post("/update", bodyParser.json(), function(req, res, next) {
    ProductModel.findById(req.body._id,(err,doc) => {
        doc.Name = req.body.Name;
        doc.Description = req.body.Description;
        doc.Price = req.body.Price;
        doc.Units = req.body.Units;
        doc.save(function (err) {
            if (err) return handleError(err); // saved!
         });
    });

  });



  router.post('/remove',bodyParser.json(), function(req, res, next) {
    if (!req.body) {
        return res.sendStatus(400);
    }

  const query = ProductModel.findByIdAndDelete(req.body._id)
    query.exec((err,doc) => {
      res.sendStatus(200);
    })

    



});


module.exports = router;
