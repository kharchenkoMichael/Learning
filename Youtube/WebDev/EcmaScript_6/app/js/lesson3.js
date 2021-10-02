const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];
console.log([...num1, ...num2]);

const A = {
  a: "default",
  b: "just_test",
};
const B = {
  a: "value_flor_b",
};

let c = {
  ...A,
  ...B,
};

console.log(c);

const arr = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...arr));

function res(arg, ...Rest) {
  console.log(arg, Rest);
}

res(1, 2, 3, 4, 5);
