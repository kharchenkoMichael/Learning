"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var num1 = [1, 2, 3, 4];
var num2 = [5, 6, 7, 8];
console.log([].concat(num1, num2));
var A = {
  a: "default",
  b: "just_test"
};
var B = {
  a: "value_flor_b"
};

var c = _objectSpread({}, A, {}, B);

console.log(c);
var arr = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum.apply(void 0, arr));

function res(arg) {
  for (var _len = arguments.length, Rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    Rest[_key - 1] = arguments[_key];
  }

  console.log(arg, Rest);
}

res(1, 2, 3, 4, 5);