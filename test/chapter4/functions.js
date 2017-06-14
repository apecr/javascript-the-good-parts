'use strict';

const functions = require('../../chapter4/functions');
const expect = require('chai').expect;

/*global define describe, it, afterEach, after*/
describe('Functions module', () => {
  describe('The method invocation pattern', () => {
    it('Increment the value. No parameters', () => {
      // Arrange
      const object = functions.myObject;

      // Act
      object.increment();

      // Assert
      expect(object.value).to.equal(1);

      // Act
      object.increment(4);

      // Assert
      expect(object.value).to.equal(5);
    });
  });
  describe('The function invocation pattern', () => {
    it('Included the double method', () => {
      // Arrange
      const object = functions.myObject;
      object.value = 3;

      // Act
      object.double();

      //Assert
      expect(object.value).to.equal(6);
    });
    it('Included the other method', () => {
      // Arrange
      const object = functions.myObject;
      object.value = 3;

      // Act
      object.otherDouble();

      //Assert
      expect(object.value).to.equal(6);
    });
  });
});