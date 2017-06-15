'use strict';

const functions = require('../../chapter4/functions');
const curry = require('../../chapter4/curry');
const expect = require('chai').expect;

/*global define, describe, it, afterEach, after*/
describe('Chapter 4 Functions. Curry examples', () => {
  it('Add with the first element already set to 1', () => {
    // Arrange
    expect(curry.add1(6)).to.equal(7);
  });
});