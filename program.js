Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};
// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.
var myObject = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

function add(a, b) {
    throwExceptionIfParametersNotANumber(a, b);
    return a + b;
}

function throwExceptionIfParametersNotANumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
}

// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function(string) {
    this.status = string;
};
// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function() {
    return this.status;
};

document.writeln('Hello, world!');
myObject.increment();
document.writeln(myObject.value); // 1
myObject.increment(2);
document.writeln(myObject.value); // 3
// Augment myObject with a double method.
myObject.double = function() {
    var that = this; // Workaround.
    var helper = function() {
        that.value = add(that.value, that.value);
    };
    helper(); // Invoke helper as a function.
};
myObject.getValue = function() {
    return this.value;
};
// Invoke double as a method.
myObject.double();
document.writeln(myObject.getValue()); // 6
// Make an instance of Quo.
var myQuo = new Quo("confused");
document.writeln(myQuo.get_status()); // confused
// Make an array of 2 numbers and add them.
var array = [3, 4];
var sum = add.apply(null, array); // sum is 7
document.writeln(sum);
// Make an object with a status member.
var statusObject = {
    status: 'A-OK'
};
// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
var status = Quo.prototype.get_status.apply(statusObject);
document.writeln(status);
// status is 'A-OK
// Make a function that adds a lot of stuff.
// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.
var sum = function() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};
document.writeln(sum(4, 8, 15, 16, 23, 42)); // 108
// Make a try_it function that calls the new add
// function incorrectly.
var try_it = function() {
    try {
        add("seven");
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}
try_it();
