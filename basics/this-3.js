var brand = 'Nissan';
var myCar = {brand: 'Honda'};

var getBrand = function() {
  console.log(this.brand); 
};

myCar.getBrand = getBrand;

myCar.getBrand();
getBrand()
