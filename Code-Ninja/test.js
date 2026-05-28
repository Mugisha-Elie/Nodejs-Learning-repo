const imported = require("./people");
const name = "Mario";
// console.log(name);

console.log(imported)

const greet = (name) => {
    console.log(`Hello ${name}`);
}

greet("Mario")