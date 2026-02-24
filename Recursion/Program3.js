// Print natural numbers from 1 to N
/* Given an integer n, print all the natural numbers from 1 to N */

let prompt = require("prompt-sync")();
let N = prompt("Enter the value of N (in integer): ");

function printNaturalNumbers(n) {
  if (n == 0) return;
  printNaturalNumbers(n - 1);
  process.stdout.write(n + " ");
}

printNaturalNumbers(N);
