var express = require('express');
var router = express.Router();
 var testRouter = require('./routes/test') 
 router.use('/test', testRouter);

router.get('/',(req,res) => {
    res.send("You've reached /api!")
})




module.exports = router;
