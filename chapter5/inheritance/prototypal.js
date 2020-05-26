'use strict';

var myMammal = {
  name: 'Herb the Mammal',
  get_name: function() {
    return this.name;
  },
  says: function() {
    return this.saying || '';
  }
};

var myCat = Object.create(myMammal);
myCat.name = 'Paquita';
myCat.saying = 'meow';
myCat.purr = (n) => {
  var i = 0;
  var s = '';
  for (i = 0; i < n; i += 1) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }
  return s;
};
myCat.get_name = function() {
  return `${this.says()} ${this.name} ${this.says()}`;
};

module.exports = {
  myCat
}