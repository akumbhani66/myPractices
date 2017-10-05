function test(a){
	this.a = a;
	this.b = 'b';
}

test.prototype.testMethod = function() {


}

module.exports = test;

var obj = new test('test');
console.log(obj);
