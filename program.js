Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};
// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.
var myObject = function () {
    var value = 0;
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        },
        setValue: function (setValue) {
            value = setValue;
        },
        double: function () {
            var that = this; // Workaround.
            var helper = function () {
                value = add(that.getValue(), that.getValue());
            };
            helper(); // Invoke helper as a function.
        }
    };
}();

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
var Quo = function (string) {
    this.status = string;
};
// Create a maker function called quo. It makes an
// object with a get_status method and a private
// status property.
var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};
// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function () {
    return this.status;
};

document.writeln('Hello, world!');
myObject.increment();
document.writeln(myObject.getValue()); // 1
myObject.increment(2);
document.writeln(myObject.getValue()); // 3
// Augment myObject with a double method.
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
var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};
document.writeln(sum(4, 8, 15, 16, 23, 42)); // 108
// Make a try_it function that calls the new add
// function incorrectly.
var try_it = function () {
    try {
        add("seven");
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}
try_it();
// Make an instance of quo.
var myQuo = quo("amazed");
document.writeln(myQuo.get_status());
Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});
document.writeln('"' + " neat     ".trim() + '"');
document.writeln((-10 / 3).integer()); // -3

// Define a walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from some given node. It invokes a function,
// passing it each node in turn. walk_the_DOM calls
// itself to process each of the child nodes.
var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};
// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// results array.
var getElementsByAttribute = function (att, value) {
    var results = [];
    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' &&
            (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });
    return results;
};

var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
};
document.writeln(factorial(4)); // 24
var foo = function () {
    var a = 3,
        b = 5;
    var bar = function () {
        var b = 7,
            c = 11;
        // At this point, a is 3, b is 7, and c is 11
        a += b + c;
        // At this point, a is 21, b is 7, and c is 11
    };
    // At this point, a is 3, b is 5, and c is not defined
    bar();
    // At this point, a is 21, b is 5
};


// Define a function that sets a DOM node's color
// to yellow and then fades it to white.
var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);

// BAD EXAMPLE
// Make a function that assigns event handler functions to an array of nodes the
// wrong way.
// When you click on a node, an alert box is supposed to display the ordinal of the
// node.
// But it always displays the number of nodes instead.
var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            alert(i);
        };
    }
};
// END BAD EXAMPLE

// BETTER EXAMPLE
// Make a function that assigns event handler functions to an array of nodes the
// right way.
// When you click on a node, an alert box will display the ordinal of the node.
var add_the_handlers_correctly = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (i) {
            return function (e) {
                alert(e);
            };
        }(i);
    }
};


// Calbacks


function send_request_asynchronously(request, callback) {
    var response = 'I did nothing';
    callback(response);
}

function prepare_the_request() {
    var request = 'the request';
    document.writeln(request);
    return request;
}

function display(string) {
    document.writeln(string);
}

var request = prepare_the_request();
send_request_asynchronously(request, function (response) {
    display(response);
});


// Module

String.method('deentityify', function () {
    // The entity table. It maps entity names to
    // characters.
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>',
        mispelotas: 'mispelotas'
    };
    // Return the deentityify method.
    return function () {
        // This is the deentityify method. It calls the string
        // replace method, looking for substrings that start
        // with '&' and end with ';'. If the characters in
        // between are in the entity table, then replace the
        // entity with the character from the table. It uses
        // a regular expression (Chapter 7).
        return this.replace(/&([^&;]+);/g,
            function (a, b) {
                var r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    };
}());

document.writeln(
    '&lt;&quot;&gt;&mispelotas;'.deentityify()); // <">

var serial_maker = function () {
    // Produce an object that produces unique strings. A
    // unique string is made up of two parts: a prefix
    // and a sequence number. The object comes with
    // methods for setting the prefix and sequence
    // number, and a gensym method that produces unique
    // strings.
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};
var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym(); // unique is "Q1000"
document.writeln(unique);

// Cascade
/*getElement('myBoxDiv').
    move(350, 150).
    width(100).
    height(100).
    color('red').
    border('10px outset').
    padding('4px').
    appendText("Please stand by").
    on('mousedown', function (m) {
        this.startDrag(m, this.getNinth(m));
    }).
    on('mousemove', 'drag').
    on('mouseup', 'stopDrag').
    later(2000, function () {
        this.
            color('yellow').
            setHTML("What hath God wraught?").
            slide(400, 40, 200, 200);
    }).
    tip('This box is resizeable');*/

// CURRY

Function.method('curry', function () {
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments);
    var that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});
var add1 = add.curry(1);
document.writeln(add1(6));

// Memoization

myObject.setValue(0);
var fibonacciSlow = function (n) {
    myObject.increment(1);
    document.writeln('Callling Fibonnaci Slow Algorithm ' + myObject.getValue());
    return n < 2 ? n : fibonacciSlow(n - 1) + fibonacciSlow(n - 2);
};
document.writeln('Fibonacci slow algorithm');
for (var i = 0; i <= 10; i += 1) {
    document.writeln('// ' + i + ': ' + fibonacciSlow(i));
}

myObject.setValue(0);
var fibonacci = function () {
    var memo = [0, 1];
    var fib = function (n) {
        myObject.increment(1);
        document.writeln('Callling Fibonnaci Fast Algorithm ' + myObject.getValue());
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}();
document.writeln('Fibonacci fast algorithm');
for (var i = 0; i <= 10; i += 1) {
    document.writeln('// ' + i + ': ' + fibonacci(i));
}

// memo is an array
// fundamental is a function to pass
var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};

var fibonacci = memoizer([0, 1], function (shell, n) {
    return shell(n - 1) + shell(n - 2);
});

