'use strict';

const functions = require('../../../chapter4/functions/functions');
const cascade = require('../../../chapter4/functions/cascade');
const expect = require('chai').expect;

/*global define, describe, it, afterEach, after*/
describe('Chapter 4 Functions. Cascade examples', () => {
  it('The getElement that is a cascade exists', () => {
    // Arrange
    expect(cascade).to.have.property('getElement');
  });
});