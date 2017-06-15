'use strict';

const functions = require('./functions');

// Cascade example (from Ajax)
// Some methods do not have a return value.
// For example, it is typical for methods that set or change the state of an object to return nothing.
// If we have those methods return this instead of undefined, we can enable cascades.
// In a cascade, we can call many methods on the same object in sequence in a single statement.
// An Ajax library that enables cascades would allow us to write in a style like this
const getElement = function(id) {
  return this;
}

/*getElement('myBoxDiv')
  .move(350, 150)
  .width(100)
  .height(100)
  .color('red')
  .border('10px outset')
  .padding('4px')
  .appendText('Please stand by')
  .on('mousedown', function(m) {
    this.startDrag(m, this.getNinth(m));
  })
  .on('mousemove', 'drag')
  .on('mouseup', 'stopDrag')
  .later(2000, function() {
    this.color('yellow')
      .setHTML('What hath God wraught?')
      .slide(400, 40, 200, 200);
  })
  .tip('This box is resizeable');*/

module.exports = {
  getElement
};