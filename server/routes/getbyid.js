var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ProductModel = require('../model')


router.get('/', function(req, res, next) {
    if (!req.body) {
        return res.sendStatus(400)
    }

     ProductModel.findById(req.query._id,(err,body) => {
        res.send(body)
    });
});

    
module.exports = router;