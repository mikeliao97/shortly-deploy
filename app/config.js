//User Stufff
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/myapp');

var userSchema = new Schema({
  username: String,
  password: String, 
}, {timestamps: true});

var urlSchema = new Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: { type: Number, default: 0}
}, {timestamps: true});


module.exports.urlSchema = urlSchema;
module.exports.userSchema = userSchema;



