// Private variable
var total = 0;

// Constructor
function Foo() {
  // access private shared variable
  total++;
console.log(">>>>", this.total);
};
// Expose a getter (could also expose a setter to make it a public variable)
Foo.prototype.getTotalObjects = function(){
console.log(total); 
 return total;
};

var obj = new Foo();
console.log(obj.getTotslObjects);
