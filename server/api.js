var express = require('express');
var router = express.Router();
var productRouter = require('./routes/product');

router.use('/product', productRouter);


router.get('/',(req,res) => {
    res.send("You've reached /api!")
})


module.exports = router;
