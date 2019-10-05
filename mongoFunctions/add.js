const assert = require('assert');

const _add = function(db,objs,callback) {
  // Get the documents collection
  const collection = db.collection('product');
  // Insert some documents
  collection.insertMany(objs, function(err, result) {
    assert.equal(err, null);
    assert.equal(objs.length, result.result.n);
    assert.equal(objs.length, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

 function add(db,objs, callback) {
  _add(db,objs, callback)

}


module.exports  = add