var util = require('util');

var inherits = function (ctor, suoerCtor){
	ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false
        }
    });
};

function Foo() { }
util.inherits(Foo, EventEmitter);
