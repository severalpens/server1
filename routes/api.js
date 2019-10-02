var express = require('express');
var router = express.Router();
var chainRouter = require('./chain') 
var siteRouter = require('./site') 
var groupRouter = require('./group') 
var channelRouter = require('./channel') 
var memberRouter = require('./member') 
var messageRouter = require('./message') 
var productRouter = require('./product') 

router.use('/chain', chainRouter);
router.use('/site', userRouter);
router.use('/group', userRouter);
router.use('/channel', userRouter);
router.use('/member', userRouter);
router.use('/message', userRouter);
router.use('/product', userRouter);

router.get('/',(req,res) => {
    res.send("You've reached /api!")
})




module.exports = router;
