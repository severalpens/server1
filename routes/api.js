var express = require('express');
var router = express.Router();
var chainRouter = require('./chain') 
var userRouter = require('./user') 

router.use('/chain', chainRouter);
router.use('/user', userRouter);

router.get('/',(req,res) => {
    res.send("You've reached /api!")
})

module.exports = router;
