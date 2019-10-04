var express = require('express');
var router = express.Router();
var groupRouter = require('./api/group') 
 var loginRouter = require('./api/login') 
// var siteRouter = require('./api/site') 
// var channelRouter = require('./api/channel') 
 var memberRouter = require('./api/member') 
// var messageRouter = require('./api/message') 
// var productRouter = require('./api/product') 

router.use('/group', groupRouter);
// router.use('/chain', chainRouter);
router.use('/login', loginRouter);
// router.use('/channel', channelRouter);
 router.use('/member', memberRouter);
// router.use('/message', messageRouter);
// router.use('/product', productRouter);

router.get('/',(req,res) => {
    res.send("You've reached /api!")
})




module.exports = router;
