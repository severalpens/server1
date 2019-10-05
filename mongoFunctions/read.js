
const assert = require('assert');
var  ObjectID = require('mongodb').ObjectID; //require ObjectID functionality


const  read = function(db,filter, callback) {
    // Get the documents collection
    const collection = db.collection('product');
    // Find some documents
    collection.find(filter).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });
  }

module.exports = read;