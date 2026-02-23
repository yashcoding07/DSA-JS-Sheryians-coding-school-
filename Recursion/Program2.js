// Print natural numbers from N to 1
// Given an integer n print all natural numbers starting from n down to 1.

let prompt = require("prompt-sync")();
let N = prompt("Enter the value of N (in integer): ");

function printNaturalNumbers(n) {
  if (n === 0) return;
  process.stdout.write(n + " ");
  printNaturalNumbers(n - 1);
}

printNaturalNumbers(N);
