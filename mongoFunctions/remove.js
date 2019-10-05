var  ObjectID = require('mongodb').ObjectID; //require ObjectID functionality
const assert = require('assert');



const removeDocument = function(db,filter,  callback) {
    // Get the documents collection
    const collection = db.collection('product');
    // Delete document where a is 3
    collection.deleteOne(filter, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });    
  }

  module.exports = removeDocument;