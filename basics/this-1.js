var car = {
  brand: "Nissan",
  getBrand: function(){
    var closure = function(){
      console.log(this.brand);
    };
    return closure();
  }
};

car.getBrand();
