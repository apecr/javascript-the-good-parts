'use strict';

const functions = require('../../chapter4/functions');
const expect = require('chai').expect;

/*global define, describe, it, afterEach, after*/
describe('Chapter 4 Functions. Firsts modules', () => {
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
  describe('The constructor invocation pattern', () => {
    it('Get a instnce of Quo', () => {
      // Act
      var quo = new functions.Quo('accepted');

      // Assert
      expect(quo.get_status()).to.equal('accepted');
    });
  });
  describe('The apply invocation pattern', () => {
    it('Should add with an array for argument (apply invocation)', () => {
      // Arrange
      var array = [3, 4];

      // Act
      var sum = functions.add.apply(null, array);

      // Assert
      expect(sum).to.equal(7);
    });
    it('Calling apply through prototype', () => {
      // Arrange
      var statusObject = {
        status: 'A-OK'
      };

      // Act
      var status = functions.Quo.prototype.get_status.apply(statusObject);

      // Assert
      expect(status).to.equal('A-OK');
    });
  });
  describe('Arguments array in action', () => {
    it('Should sum all the arguments of the function', () => {
      expect(functions.sum(1, 2, 3, 4, 5)).to.equal(15);
    });
  });
  describe('Exceptions', () => {
    it('Calling a function that throw an exception', () => {
      try {
        functions.addValidateParams('seven');
      } catch (e) {
        expect(e.name).to.equal('TypeError');
        expect(e.message).to.equal('add needs numbers');
      }
    });
    it('Calling a function that throw an exception. Other way', () => {
      expect(() => functions.addValidateParams('seven')).to.throw();
    });
  });
  describe('Augment types', () => {
    it('Using integer from Number becasue method prototype from Function', () => {
      expect((-10 / 3).integer()).to.equal(-3);
    });
    it('Using myTrim function', () => {
      expect('   hola    '.myTrim()).to.equal('hola');
    });
  });
  const hanoiResult = 'Move disc 1 from Src to Dst \n' +
    'Move disc 2 from Src to Aux \n' +
    'Move disc 1 from Dst to Aux \n' +
    'Move disc 3 from Src to Dst \n' +
    'Move disc 1 from Aux to Src \n' +
    'Move disc 2 from Aux to Dst \n' +
    'Move disc 1 from Src to Dst \n';
  describe('Recursion', () => {
    it('Hanoi problem', () => {
      // Act
      var resultHanoi = functions.hanoi(3, 'Src', 'Aux', 'Dst');

      // Asser
      expect(resultHanoi).to.equal(hanoiResult);
    });
    it('Factorial', () => {
      expect(functions.factorial(5)).to.equal(120);
    });
  });
  describe('Scope exmaples', () => {
    it('Should get the variables from the correct scope', () => {
      expect(functions.foo()).to.deep.equal([21, 5]);
    });
  });
  describe('Closure examples', () => {
    it('Example with closure myObject', () => {
      // Arrange
      var myClosureObject = functions.myClosureObject;

      // Act
      myClosureObject.increment();
      myClosureObject.increment(4);

      // Assert
      expect(myClosureObject.getValue()).to.equal(5);
    });
    it('Other closure example', () => {
      // Arrange
      var quo = functions.quo('flipando');

      // Assert
      expect(quo.getStatus()).to.equal('flipando');
    });
    it('Adding handlers wrong way', () => {
      // Arrange
      let arrayOfNodesToHandle = [{name: 'handler1'}, {name: 'handler2'}];
      functions.addTheHandlers(arrayOfNodesToHandle);

      // Act
      //expect(arrayOfNodesToHandle[0].onclick()).to.equal(0);
      //expect(arrayOfNodesToHandle[1].onclick()).to.equal(1);
    });
    it('Adding handlers right', () => {
      // Arrange
      let arrayOfNodesToHandle = [{name: 'handler1'}, {name: 'handler2'}];
      functions.addTheHandlersCorrectly(arrayOfNodesToHandle);

      // Act
      expect(arrayOfNodesToHandle[0].onclick()).to.equal(0);
      expect(arrayOfNodesToHandle[1].onclick()).to.equal(1);
    });
  });
});