'use strict';

var add = function(a, b) {
  return a + b;
};

var addValidateParams = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    };
  }
  return add(a, b);
};

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
};

// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function(string) {
  this.status = string;
};

// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function() {
  return this.status;
};


// Make a function that adds a lot of stuff.
// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.
var sum = function() {
  var i = 0;
  var sum = 0;
  for (i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }
  return sum;
};


Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};

Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});
String.method('myTrim', function() {
  return this.replace(/^\s+|\s+$/g, '');
});

let result = '';
var hanoi = function(disc, src, aux, dst) {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    result += `Move disc ${disc} from ${src} to ${dst} \n`;
    hanoi(disc - 1, aux, src, dst);
  }
  return result;
};

// Make a factorial function with tail
// recursion. It is tail recursive because
// it returns the result of calling itself.
// JavaScript does not currently optimize this form.
var factorial = function(i, a) {
  a = a || 1;
  if (i < 2) {
    return a;
  }
  return factorial(i - 1, a * i);
};

var foo = function() {
  var a = 3;
  var b = 5;
  var bar = function() {
    var b = 7, c = 11;

    // At this point, a is 3, b is 7, and c is 11
    a += b + c;

    // At this point, a is 21, b is 7, and c is 11
  };

  // At this point, a is 3, b is 5, and c is not defined
  bar();

  // At this point, a is 21, b is 5
  return [a, b];
};

module.exports = {
  add,
  myObject,
  Quo,
  sum,
  addValidateParams,
  hanoi,
  factorial,
  foo
};