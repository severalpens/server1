var express = require('express');
var router = express.Router();
var testRouter = require('./routes/test');
var addRouter = require('./routes/add');
var removeRouter = require('./routes/remove');
var getItemRouter = require('./routes/getitem');
var getListRouter = require('./routes/getlist');
var prodCountRouter = require('./routes/prodcount');
var updateRouter = require('./routes/update');
var validIdRouter = require('./routes/validid');

router.use('/test', testRouter);
router.use('/add', addRouter);
router.use('/remove', removeRouter);
 router.use('/getitem', getItemRouter);
 router.use('/getlist', getListRouter);
 router.use('/prodcount', prodCountRouter);
 router.use('/update', updateRouter);
 router.use('/validid', validIdRouter);

router.get('/',(req,res) => {
    res.send("You've reached /api!")
})




module.exports = router;
