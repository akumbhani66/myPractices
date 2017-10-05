var Foo = function (name) { this.name = name;
	this.data = [1,2,3];
 };
Foo.prototype.data = [1, 2, 3]; // setting a non-primitive property
Foo.prototype.showData = function () { console.log(this.name, this.data); };

var foo1 = new Foo("foo1");
var foo2 = new Foo("foo2");

// both instances use the same default value of data
foo1.showData(); // "foo1", [1, 2, 3]
foo2.showData(); // "foo2", [1, 2, 3]

// however, if we change the data from one instance
foo1.data.push(4);
foo1.name="ashvin";
// it mirrors on the second instance
foo1.showData(); // "foo1", [1, 2, 3, 4]
foo2.showData(); // "foo2", [1, 2, 3, 4]
