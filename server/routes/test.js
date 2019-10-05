var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url = require('url');

router.post('/',bodyParser.json(), function(req, res, next) {
        res.send('test post reached')
});

router.get('/',bodyParser.json(), function(req, res, next) {
    res.send('test get reached')
});

module.exports = router;
