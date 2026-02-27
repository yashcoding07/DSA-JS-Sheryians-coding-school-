// Leetcode 69. Sqrt(x)
/* Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python. */

let prompt = require("prompt-sync")();
let x = Number(prompt("Enter the value of x (in integer): "));

function Square(x) {
  let i = 1;
  for (; i * i <= x; i++) {
    if (i * i == x) return i;
    }
  return i - 1;
}

let ans = Square(x);
console.log(ans);
