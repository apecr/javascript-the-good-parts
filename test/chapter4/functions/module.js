'use strict';

const functions = require('../../../chapter4/functions/functions');
const modules = require('../../../chapter4/functions/module');
const expect = require('chai').expect;

/*global define, describe, it, afterEach, after*/
describe('Chapter 4 Functions. Module module', () => {
  describe('Modules', () => {
    it('Deentify method in strings', () => {
      // Arrange
      var stringToChange = '&Hola mis amigos;';

      // Act
      var stringModified = stringToChange.deentityify();

      // Assert
      expect(stringModified).to.equal('&Hola mis amigos;');
    });
    it('Deentify method in strings. Example 2', () => {
      // Arrange
      var stringToChange = '&lt;a&gt;Hola mis amigos&lt;/a&gt;';

      // Act
      var stringModified = stringToChange.deentityify();

      // Assert
      expect(stringModified).to.equal('<a>Hola mis amigos</a>');
      expect('&lt;&quot;&gt;'.deentityify()).to.equal('<">');
    });
    it('String sequences generator', () => {
      // Arrange
      var seqer = modules.serial_marker();

      // Act
      seqer.set_prefix('Q');
      seqer.set_seq(1000);
      var unique = seqer.gensym();

      // Assert
      expect(unique).to.equal('Q1000');
      expect(seqer.gensym()).to.equal('Q1001');
    });
  });
});