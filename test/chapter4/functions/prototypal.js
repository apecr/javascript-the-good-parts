'use strict';

const prototypal = require('../../../chapter5/inheritance/prototypal');
const expect = require('chai').expect;

/*global define, describe, it, afterEach, after*/
describe('Chapter 5 Inheritance. Prototypal examples', () => {
  it('My Cat inherits mammal. Get name method', () => {
    // Act
    var cat = prototypal.myCat;

    // Assert
    expect(cat.get_name()).to.equal('meow Paquita meow');
  });
  it('My Cat inherits mammal. Purr method', () => {
    // Act
    var cat = prototypal.myCat;

    // Assert
    expect(cat.purr(12)).to.equal('r-r-r-r-r-r-r-r-r-r-r-r');
  });
});

