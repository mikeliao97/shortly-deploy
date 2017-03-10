// var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Promise = require('bluebird');

var userSchema = require('../config').userSchema;

//Instance methods
userSchema.methods.comparePassword = function(attempt, callback) {
  bcrypt.compare(attempt, this.password, function(err, isMatch) {
    console.log('isMatch in bcrypt', isMatch);
    if (err) {
      console.log('error', err);
    }
    callback(isMatch);
  });
};

var User = mongoose.model('User', userSchema);

module.exports = User;


