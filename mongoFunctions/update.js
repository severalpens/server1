var  ObjectID = require('mongodb').ObjectID; //require ObjectID functionality
const assert = require('assert');


const update = function(db,filter,updateArgs, callback) {
    // Get the documents collection
    const collection = db.collection('product');
    // Update document where a is 2, set b equal to 1
    collection.updateOne(filter
      , updateArgs, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });  
  }

module.exports = update


