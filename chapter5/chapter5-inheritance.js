Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};
Function.method('new', function() {
    // Create a new object that inherits from the
    // constructor's prototype.
    var that = Object.create(this.prototype);
    // Invoke the constructor, binding –this- to
    // the new object.
    var other = this.apply(that, arguments);
    // If its return value isn't an object,
    // substitute the new object.
    return (typeof other === 'object' && other) || that;
});

var Mammal = function(name) {
    this.name = name;
};
Mammal.prototype.get_name = function() {
    return this.name;
};
Mammal.prototype.says = function() {
    return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name(); // 'Herb the Mammal'
console.log('The name of the Mammal --> ' + name);


//'meow Henrietta meow'
var maker = function(especification) {
    return this;
};
var f = 'first';
var l = 'last';
var s = 'state';
var c = 'city';
var myObject = maker({
    first: f,
    last: l,
    state: s,
    city: c
});



console.log(myObject);


// Prototypal
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
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function(n) {
    var i, s = '';
    for (i = 0; i < n; i++) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
myCat.get_name = function(){
  return this.says() + ' ' + this.name + ' ' + this.says();
};

console.log('My cat is: ' + myCat.get_name());
