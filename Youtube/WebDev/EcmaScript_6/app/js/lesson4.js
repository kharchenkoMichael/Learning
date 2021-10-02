function greet(name) {
  console.log(`Hello ${name} !!!
  
  multiline  yeah`);
}
greet("michael");

let symbol1 = Symbol.for("symbol");
let symbol2 = Symbol("symbol");
let symbol3 = Symbol.for("symbol");

console.log(symbol1 === symbol2);
console.log(symbol1 === symbol3);
console.log(symbol3 === symbol2);
