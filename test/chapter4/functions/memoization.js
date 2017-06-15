'use strict';

const memoization = require('../../../chapter4/functions/memoization');
const expect = require('chai').expect;

/*global define, describe, it, afterEach, after*/
describe('Chapter 4 Functions. Memoization examples', () => {
  it('Memoization example 1 (slow call to fibonacci)', () => {
    // Assert
    // 1,2,3,4,5,6,7,8
    // f(1) = 1, f(2) = 1, f(3) = 2, f(4) = 3
    // f(5) = 5, f(6) = 8, f(7) = 13, f(8) = 21
    // f(9) = 34, f(10) = 55, f(11) = 89, f(12) = 144
    expect(memoization.fibonnaciSlow(4)).to.equal(3);
    expect(memoization.fibonnaciSlow(12)).to.equal(144);
  });
  it('Using memoize to get fibonacci faster', () => {
    // Assert
    expect(memoization.fibonnaciFast(4)).to.equal(3);
    expect(memoization.fibonnaciFast(12)).to.equal(144);
  });
  it('Using memoize function to get fibonacci faster', () => {
    // Act
    const fibonMemoized = memoization.memoizer(memoization.fibonnaciSlow, [0, 1]);

    // Assert
    expect(fibonMemoized(4)).to.equal(3);
    expect(fibonMemoized(12)).to.equal(144);
  });
  it('Factorial already memoized', () => {
    // Act
    var result = memoization.factorial(3);

    // Assert
    expect(memoization.factorial(3)).to.equal(6);
    expect(memoization.factorial(4)).to.equal(24);
    expect(memoization.factorial(5)).to.equal(120);
  });
});