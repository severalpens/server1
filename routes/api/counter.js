
  //get Counter
  router.get('/counter',bodyParser.json(), function(req, res, next) {
    const query = MongooseModel.find(); // `query` is an instance of `Query`
    query.setOptions({ lean : true });
    query.collection(MongooseModel.collection);
    query.where('groupCounter').gte(0);
    query.exec((err,body) => {
      res.send(body)
    });
    });
  
    // update counter
  // insert or update (upsert)
  router.post('/counter',bodyParser.json(), function(req, res, next) {
    var myquery = { name: "counters" };
    var newvalues = { $set: {name: "counters", groupCounter: 33 } };
    var result =   MongooseModel.updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
          return res
      });
   res.send(true)
  });