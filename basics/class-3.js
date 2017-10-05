function test() {
	
	console.log("from main class");
}

test.prototype.test2 = function () {
	console.log("from prototyping");
}

module.exports = test;
var myobj= new test();
console.log(myobj.test2);
