function test() {
	this.a = "a";

}

test.prototype.b = "b";

var obj = new test();
console.log(obj.b); 
