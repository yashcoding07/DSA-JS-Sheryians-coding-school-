// Print hello world n times
/* Given an integer n print "Hello world!" exactly n times using recursion */

let prompt = require("prompt-sync")();
let num = prompt("Enter the value of n (in integer): ");

function greet(n) {
  if (n === 0) return;
  console.log("Hello world!");
  greet(n - 1);
}

greet(num);
