var car = {
  brand: "Nissan",
  getBrand: function(){
    var self = this;
    var closure = function(){
      console.log(self.brand);
    };
    return closure();
  }
};

car.getBrand();
