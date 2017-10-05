function foo() {
  "use strict";
  let i = -1;

  for (let i = 0; i < 10; i += 1) {
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  }

  console.log(i); // -1
}

foo();
