'use strict';

var add = function(a, b) {
  return a + b;
}

var myObject = {
  value: 0,
  increment: function(inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
};

myObject.double = function() {
  var that = this; //Workaround
  var helper = function() {
    that.value = add(that.value, that.value);
  };
  helper();
};

myObject.otherDouble = function() {
  this.value = add(this.value, this.value);
}

module.exports = {
  myObject
};