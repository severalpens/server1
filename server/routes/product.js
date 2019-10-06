var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var ProductModel = require("../model");

router.get("/",bodyParser.json(), function(req, res, next) {
  if (!req.query) {
    return res.sendStatus(400);
  }

  ProductModel.findById(req.query._id, (err, body) => {
    res.send(body);
  });
});

router.get("/all",bodyParser.json(), function(req, res, next) {
    if (!req.body) {
      return res.sendStatus(400);
    }
  
    ProductModel.find((err, body) => {
      res.send(body);
    });
  });

router.post("/", bodyParser.json(), function(req, res, next) {
  // Create an instance of model SomeModel
  var product = ProductModel.create(req.body,(err,docs) => {
    res.sendStatus(200);
  })
});

router.delete("/:_id", function(req, res, next) {
  
  ProductModel.findByIdAndDelete(req.params._id,(err,docs) => {
    if (err)  {
      console.log('delete failed');
      return res.sendStatus(400)
    }; // saved!

    return res.send(docs);
  })
});


router.put("/", bodyParser.json(), function(req, res, next) {
  if (!req.body) {
    console.log('req.body is null');
    return res.sendStatus(400)
  }

    ProductModel.findById(req.body._id,(err,doc) => {
      if (!doc) {
        console.log('findById doc is null');
        return res.sendStatus(400)
      }

        doc.Name = req.body.Name;
        doc.Description = req.body.Description;
        doc.Price = req.body.Price;
        doc.Units = req.body.Units;

        doc.save(function (err) {
            if (err)  {
              console.log('save failed');
              return res.sendStatus(400)
            }; // saved!
            res.sendStatus(200);
          });
    });

  });



  router.post('/remove',bodyParser.json(), function(req, res, next) {
    const query = ProductModel.findByIdAndDelete(req.body._id)
    console.log(`ProductModel.findByIdAndDelete: ${JSON.stringify(req.body)}`);
    query.exec((err,doc) => {
      if(err){console.log(JSON.stringify(err));}
      console.log(req.body);
      console.log(doc);
      res.sendStatus(200);
    }) 
});


module.exports = router;
