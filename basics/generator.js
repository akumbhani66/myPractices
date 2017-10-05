function* idMaker() {
    var index = 0;
    // while(true) {
        yield 1;
        yield 2;
    // }
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3