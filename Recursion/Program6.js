// Fibonacci Series using Recursion
/* Given a number n, generate the sum of first n terms of the fibonacci series using recursion. The Fibonacci series is a sequence where each number is the sum of the two preceding ones, Starting from 0 and 1. F(0) = 0, F(1) = 1, F(n) = F(n - 1) + (n - 2) for n > 1. */

function fibonacciSeries(n, first, second) {
  if (n <= 0) return;
  let third = first + second;
  process.stdout.write(third + " ");
  fibonacciSeries(n - 1, second, third);
}

let n = 5; // ans: 0,1,1,2,3
let first = 0,
  second = 1;
process.stdout.write(first + " " + second + " ");
fibonacciSeries(n - 2, first, second);
