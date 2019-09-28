var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chainSchema = new Schema({
    name: String,
    type: String,
    parent: String,
    members: Array,
    admins: Array

});


module.exports = mongoose.model('Chain', chainSchema);



