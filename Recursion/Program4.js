// Sum up to N terms
/* Write a program that accepts an integer n and calculates the sum of the first n natural numbers. Natural numbers start from 1 and go up to n. */

let prompt = require("prompt-sync")();
let N = Number(prompt("Enter the value of n (in integer): "));

function sumOfNTerms(n) {
  if (n == 1) return n;
  return n + sumOfNTerms(n - 1);
}

console.log(sumOfNTerms(N));
