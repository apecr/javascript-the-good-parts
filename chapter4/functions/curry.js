'use strict';

var functions = require('./functions');

Function.method('curry', function() {
  var slice = Array.prototype.slice;
  var args = slice.apply(arguments);
  return (...arg) => {
    return this.apply(null, args.concat(slice.apply(arg)));
  };
});

var add1 = functions.add.curry(1);


module.exports = {
  add1
}
