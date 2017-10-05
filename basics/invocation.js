  val: 0,
  increment: function () {
    this.val += 1;
  }
};
counter.increment();
console.log(counter.val); // 1
counter['increment']();
console.log(counter.val); // 2
