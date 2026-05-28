// const math = require("./math");
// const {add, subtract} = require('./math');

// // console.log(math);
// let result = add(12, 4);
// console.log(result);

const add = require('./math');

console.log(add);
const math = add;
console.log(math(1, 2))
console.log(math.subtract(1, 2));