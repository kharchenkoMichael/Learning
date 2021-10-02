"use strict";

function greet(name) {
  console.log("Hello ".concat(name, " !!!\n  \n  multiline  yeah"));
}

greet("michael");
var symbol1 = Symbol["for"]("symbol");
var symbol2 = Symbol("symbol");
var symbol3 = Symbol["for"]("symbol");
console.log(symbol1 === symbol2);
console.log(symbol1 === symbol3);
console.log(symbol3 === symbol2);
var a = Math.pow(7, 2);
console.log(a);