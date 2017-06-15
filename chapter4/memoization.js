'use strict';

const memoizer = function(fundamental, memo) {
  var args = arguments;
  var cache = memo ? memo : {};
  return function() {
    const key = JSON.stringify(arguments);
    if (!(key in cache)) {
      cache[key] = fundamental.apply(this, arguments);
    }
    return cache[key];
  };
};

var fibonnaci = (n) => {
  return n < 2 ? n : fibonnaci(n - 1) + fibonnaci(n - 2);
};

const factorial = (n) => {
  return n > 0 ? n * factorial(n - 1) : 1;
}

var factorialMemo = memoizer(factorial, [1, 1]);

var fibonacciMemoize = (function() {
  var memo = [0, 1];
  var fib = (n) => {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
}());

module.exports = {
  fibonnaciSlow: fibonnaci,
  fibonnaciFast: fibonacciMemoize,
  memoizer: memoizer,
  factorial: factorialMemo
};