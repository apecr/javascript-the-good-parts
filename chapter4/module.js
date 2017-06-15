'use strict';

const functions = require('./functions');

String.method('deentityify', (function() {
  // The entity table. It maps entity names to
  // characters.
  var entity = {
    quot: '"',
    lt: '<',
    gt: '>'
  };

  // Return the deentityify method.
  return function() {
    // This is the deentityify method. It calls the string
    // replace method, looking for substrings that start
    // with '&' and end with ';'. If the characters in
    // between are in the entity table, then replace the
    // entity with the character from the table. It uses
    // a regular expression (Chapter 7).
    return this.replace(/&([^&;]+);/g,
      function(a, b) {
        var r = entity[b];
        return typeof r === 'string' ? r : a;
      }
    );
  };
}()));

var serialMaker = function() {
  // Produce an object that produces unique strings. A
  // unique string is made up of two parts: a prefix
  // and a sequence number. The object comes with
  // methods for setting the prefix and sequence
  // number, and a gensym method that produces unique
  // strings.
  var prefix = '';
  var seq = 0;
  return {
    set_prefix: function(p) {
      prefix = String(p);
    },
    set_seq: function(s) {
      seq = s;
    },
    gensym: function() {
      var result = prefix + seq;
      seq += 1;
      return result;
    }
  };
};

module.exports = {
  serial_marker: serialMaker
};