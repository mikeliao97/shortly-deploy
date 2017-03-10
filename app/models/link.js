var mongoose = require('mongoose');
var util = require('../../lib/utility');
var crypto = require('crypto');

var urlSchema = require('../config').urlSchema;

urlSchema.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

var Link = mongoose.model('Link', urlSchema);
module.exports = Link;

