// Fibonacci Series using Recursion
/* Given a number n, generate the sum of first n terms of the fibonacci series using recursion. The Fibonacci series is a sequence where each number is the sum of the two preceding ones, Starting from 0 and 1. F(0) = 0, F(1) = 1, F(n) = F(n - 1) + (n - 2) for n > 1. */

function FiboNTerms(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return FiboNTerms(n - 1) + FiboNTerms(n - 2);
}

let n = 5;
let sum = FiboNTerms(n);
console.log(sum); // ans: 5
